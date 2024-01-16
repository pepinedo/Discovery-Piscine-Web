i=1
if [ -z $1 ]
then
	echo "No arguments supplied"
	exit
fi
while [ i<=$# ]
do
	mkdir ex$i
	i++
done
