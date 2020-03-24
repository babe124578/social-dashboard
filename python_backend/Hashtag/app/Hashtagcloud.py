from flask_cors import CORS, cross_origin
from flask import Flask , Response
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
    obj = s3.get_object(Bucket='csv-storage', Key='hashtag.csv')
    df = pd.read_csv(io.BytesIO(obj['Body'].read()))
    return df


def get_hashtag_pair():
    hashtagCount = dict()

    for i in get_dataframe()['0']:
        if i not in hashtagCount:
            hashtagCount[i] = 1
        else:
            hashtagCount[i] += 1
    filter = dict()
    for i in hashtagCount:
        if hashtagCount[i] != 1:
            filter[i] = hashtagCount[i]
    tmp = []
    hashtagCounts = sorted(filter.items(),reverse=True, key=lambda x: x[1])
    for i in range(100):
        tmp.append({'text': hashtagCounts[i][0],'value':hashtagCounts[i][1]})
    return tmp 

@cross_origin()
@app.route('/test')
def test():
    return 'test'

@app.route('/Hashtag')
def hashtag():
    return {'labels': get_hashtag_pair()}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, use_reloader=True)
