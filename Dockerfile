FROM node:24

RUN apt-get update && apt-get install -y cron

WORKDIR /app

COPY . .

RUN npm install

COPY ./cronfile /etc/cron.d/bot-cron

RUN chmod 0644 /etc/cron.d/bot-cron

RUN crontab /etc/cron.d/bot-cron

RUN touch /var/log/cron.log

CMD cron && tail -f /var/log/cron.log
