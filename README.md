# Bmis-backend

This is the backend for the Bmi calculator app.

## Overview

This is a simple REST API built with Express.js and MongoDB. It provides endpoints for users to register, login and calculate their BMI.

## Endpoints

### Register

* **POST /register**
	+ Body: `name`, `email`, `password`
	+ Response: `message`

### Login

* **POST /login**
	+ Body: `email`, `password`
	+ Response: `token`

### Calculate BMI

* **POST /bmi**
	+ Body: `height`, `weight`
	+ Response: `bmi`

## Usage

### Register


