from flask_cors import CORS, cross_origin
from flask import Flask
import io
import pandas as pd
import boto3

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
    obj = s3.get_object(Bucket='csv-storage', Key='topmessage.csv')
    df = pd.read_csv(io.BytesIO(obj['Body'].read()))
    df = df.values.tolist()
    return df


def sortSecond(val):
    return val[1]


def get_top10():
    data = sorted(get_dataframe(), key=sortSecond, reverse=True)
    tmp = []
    for i in data:
        if len(tmp) == 10:
            break
        p = i[0].split()
        if len(p) >= 3:
            if p[0].isdigit() == False and p[2].isdigit() == False:
                tmp.append({'text': i[0], 'value': i[1]})
    return tmp


@cross_origin()
@app.route('/test')
def test():
    return 'hellotest'


@app.route('/TopMessage')
def topmessage():
    return {'labels': get_top10()}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5006, use_reloader=True)
