from flask_cors import CORS, cross_origin
from flask import Flask
import io
import pandas as pd
import boto3
import re

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


def get_key(field):
    df = pd.read_csv('credentials.csv')
    return df[field][0]


def get_dataframe():
    s3 = boto3.client('s3',
                      aws_access_key_id=get_key('Access key ID'),
                      aws_secret_access_key=get_key('Secret access key'))
    obj = s3.get_object(Bucket='csv-storage', Key='topaccount.csv')
    df = pd.read_csv(io.BytesIO(obj['Body'].read()))
    return df

def get_top10():
    top10 = dict()
    for i in get_dataframe()['owner name']:
        if i not in top10:
            top10[i] = 1
        else: 
            top10[i] += 1
    
    sortedtop10 = sorted(top10.items(),reverse=True, key=lambda x: x[1])

    tmp = []
    for i in sortedtop10:
        if len(tmp) == 10:
            break
        else:
            if (re.search('[ก-๙a-zA-Z]', i[0]) and True) and len(i[0]) > 1 and i[0] != 'Unknown':
                tmp.append({'name': i[0], 'value': i[1]})
    return tmp

@cross_origin()
@app.route('/test')
def test():
    return 'hellotest'


@app.route('/TopAccount')
def topaccount():
    return {'labels': get_top10()}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5004, use_reloader=True)