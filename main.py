from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import jwt
import os
from pathlib import Path
import sqlite3

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
    
    # send a SQL query  NEED TO FINISH
    
    
    data_path = Path("data.db")
    con = sqlite3.connect('data.db')
    cur = con.cursor()
    # if the login doesn't exist return ""
    query = "SELECT password FROM employee WHERE name='{}';".format(info.username)
    print(query)
    res = cur.execute(query)

    pwd_response = res.fetchall()
    con.close()
    if len(pwd_response) == 0:
        return ""
    if pwd_response[0][0]!=info.pwd:
        return ""
    with open('secret.txt') as f:
        secret = f.read()
    hashstr = jwt.encode(user, secret, algorithm="HS256")

    # return a hash code for the cookie
    return hashstr
    
@app.post("/create")
def create_acct(info:Acct_info):
    
    
    # query the db, check to see if the username exists or the password exists
    # if so, return ""
    # insert into the database
        # first parse the domain of the email
        # query the company and see if the company exists by domain
        # select id from company where company = domain     
        # if the company doesn't exist, you need to create the company then query for the id
        # then 
    query = "SELECT * FROM employee WHERE name='{}' OR email='{}';".format(info.username, info.email)
    print(query)
    con = sqlite3.connect('data.db')
    cur = con.cursor()
    res = cur.execute(query)
    if len(res.fetchall())!=0:
        con.close()
        return ""
    domain = info.email.split('@')[1]
    query = "SELECT ID FROM company WHERE domain='{}';".format(domain)
    res = cur.execute(query)    
    if len(res.fetchall())==0:
       query = "INSERT INTO company(domain) VALUES('{}');".format(domain)
       cur.execute(query)
    query = "SELECT ID FROM company WHERE domain='{}';".format(domain)
    res = cur.execute(query) # ok this is redundant
    id = (res.fetchall())[0][0] 
    # now need to insert user info

    query = '''
        INSERT INTO employee(name,company_id,email,password,role,gender,pay, pay_period, exp)
        VALUES(?,?,?,?,?,?,?,?,?);
    '''
    cur.execute(query,(info.username,id,info.email,info.password,info.role,info.gender,info.salary,info.pay_period, info.experience))  
    con.commit()    
    con.close()
    with open('secret.txt') as f:
        secret = f.read()
    user = {"user":info.username,"password":info.password} 
    hashstr = jwt.encode(user, secret, algorithm="HS256")

    return hashstr


# want to see if username in db or email in db
# need to add a post to get company info given the hash
# here I need to decide if I should send all info or in the js post ask for a page
# am going to do 25 per page


# also need a get company info

# also need a get user info
# just a function, my company will be sending the hash code, use this to create a acct info object



