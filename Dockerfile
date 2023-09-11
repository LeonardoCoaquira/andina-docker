# Usa una imagen base de Nginx
FROM nginx:alpine

# Elimina el archivo de configuración de Nginx predeterminado
RUN rm /etc/nginx/conf.d/default.conf

# Copia tu archivo de configuración personalizado a la ubicación adecuada
COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos de tu sitio web estático al directorio de trabajo de Nginx
COPY ./ /usr/share/nginx

# Exponer el puerto 80 para que Nginx pueda servir el contenido web
EXPOSE 80

# Comando para iniciar Nginx en segundo plano al iniciar el contenedor
CMD ["nginx", "-g", "daemon off;"]
