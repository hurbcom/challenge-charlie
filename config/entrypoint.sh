cd /etc/nginx/http.d;


# ENV VARS
export CRT="${CRT:=nginx-selfsigned.crt}";
if [ -f "/etc/ssl/certs/$CRT" ]
then
    sed -i "/ssl_certificate \//c\\\tssl_certificate \/etc\/ssl\/certs\/$CRT;" default.conf;
fi


# KEY
export KEY="${KEY:=nginx-selfsigned.key}";
if [ -f "/etc/ssl/private/$KEY" ]
then
    sed -i "/ssl_certificate_key \//c\\\tssl_certificate_key \/etc\/ssl\/private\/$KEY;" default.conf;
fi

nginx -g 'daemon off;'; nginx -s reload;
