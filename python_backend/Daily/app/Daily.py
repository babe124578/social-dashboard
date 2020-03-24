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
    obj = s3.get_object(Bucket='csv-storage', Key='time.csv')
    df = pd.read_csv(io.BytesIO(obj['Body'].read()))
    return df


def daily_user_each_day():
    dailyCount = dict()

    for i in get_dataframe()['0']:
        if i.split(' ')[0] not in dailyCount:
            dailyCount[i.split(' ')[0]] = 1
        else:
            dailyCount[i.split(' ')[0]] += 1

    return [list(dailyCount.keys()), list(dailyCount.values())]


@cross_origin()
@app.route('/test')
def test():
    return 'hellotest'


@app.route('/Daily')
def daily():
    return {'labels': daily_user_each_day()}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, use_reloader=True)


# run docker run
