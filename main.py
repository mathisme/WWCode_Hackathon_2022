from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import jwt
import os

app = FastAPI()

# this will need to be changed as we are using cookies
app.add_middleware(CORSMiddleware, allow_origins=["*"],allow_credentials=True,
allow_methods=["*"],allow_headers=["*"])

class User_login(BaseModel):
    username: str
    pwd: str
    
class Acct_info(BaseModel):
    username: str
    password: str
    gender: str
    email: str
    role: str
    salary: float
    pay_period: str
    experience: int

@app.get("/")
def read_root():
    return "Please send data as a POST request"
    
@app.post("/login")
def log_in(info:User_login): 
    

    # get the login details
    user = {"user":info.username,"password":info.pwd}    
    # send a SQL query  NEED TO DO

    # if the login exists and the password is correct make a hash with the username and pwd
    # NEED TO CHECK THE RESULTS FROM THE SQL QUERY
    with open('secret.txt') as f:
        secret = f.read()
    hashstr = jwt.encode(user, secret, algorithm="HS256")

    # return a hash code for the cookie
    return hashstr
    
# need to add a post to set user info for creating an account
# remember you need to send a sql query to see if the company exists based on the domain
# if it doesn't exist create it in the db
# be sure to also check to see if the user exists
# if the user does exist raise an error
@app.post("/create")
def create_acct(info:Acct_info):
    # just for testing
    str1 = "username: "+info.username+", "
    str1 += "password: "+info.password+", "
    str1 += "gender: "+info.gender+", "
    str1 += "email: "+info.email+", "
    str1 += "role: "+info.role+", "
    str1 += "salary: "+str(info.salary)+", "
    str1 += "pay period: "+info.pay_period+", "
    str1 += "experience: "+str(info.experience)
    return str1



# need to add a post to get company info given the hash
# here I need to decide if I should send all info or in the js post ask for a page
# am going to do 25 per page


