#!/bin/bash

RED="\e[31m"
GREEN="\e[32m"
ENDCOLOR="\e[0m"


INIT="node_modules"

# go to home dir
cd ~

# check if the react app is already exisits, if not create it
if [ ! -d "$INIT" ]
then
	echo -n "[RUN] => npx create-react-app pws-236369-store-frontend --template typescript"
	npx create-react-app pws-236369-store-frontend --template typescript
	if [[ $? != 0 ]]
	then
		echo -e "[ ${RED}FAILED${ENDCOLOR} ]"
		exit
	fi
	echo -e "[ ${GREEN}OK${ENDCOLOR} ]"

	mv pws-236369-store-frontend/* .
	rm pws-236369-store-frontend
fi

# run the react app
echo "[RUN] => npm start"
npm run start

