FROM python:3.7.7-slim

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app

EXPOSE 5005

ENTRYPOINT [ "python" ]

CMD [ "Wordcloud.py" ]