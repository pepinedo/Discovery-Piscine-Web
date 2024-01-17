if [ -z $1 ]
then
	echo "No arguments supplied"
	exit
fi

for nombre in "$@"; do
	mkdir "ex$nombre"
done

echo "Carpetas creadas con éxito: $@"