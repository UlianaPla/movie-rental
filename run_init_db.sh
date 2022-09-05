#!/bin/bash

psql -U ulia_4d91 -h localhost -d movie_rental -f docker-entrypoint-initdb.d/init_db.sql
