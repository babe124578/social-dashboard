from flask_cors import CORS, cross_origin
from flask import Flask
import io
import pandas as pd
import boto3
import collections

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
    obj = s3.get_object(Bucket='csv-storage', Key='filter_message.csv')
    df = pd.read_csv(io.BytesIO(obj['Body'].read()))
    df = df.values.tolist()
    return df


def get_100_most_freq():
    tmp = []
    for i in get_dataframe():
        if len(tmp) == 100:
            break
        if i[0] != '="://..////-."':
            tmp.append({'text': i[0], 'value': i[1]})
    return tmp


@cross_origin()
@app.route('/test')
def test():
    return 'test'


@app.route('/Wordcloud')
def wordcloud():
    return {'labels': get_100_most_freq()}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5005, use_reloader=True)
