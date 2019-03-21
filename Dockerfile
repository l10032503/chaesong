FROM nginx:1.14.2-alpine

COPY ./build /var/www/chaesong.com
COPY ./nginx.conf /etc/nginx/conf.d/chaesong.com.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]