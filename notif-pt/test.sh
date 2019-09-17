#!/bin/sh

CLIENT_COUNT=100
LOGDIR="./log"
test -d $LOGDIR && rm -r $LOGDIR
test -d $LOGDIR || mkdir $LOGDIR

for i in $(eval echo "{1..$CLIENT_COUNT}")
do
    exec nohup node client.js > $LOGDIR/$i.txt &
done