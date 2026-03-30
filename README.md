Step 1 : For CI/CD create a yml file like below in folder 
.github\workflows\deploy.yml file
Step 2 : add cred to github path 
    Go to Repo and Setting -> action -> Secrets and variable -> Actions
    then create Repository secrets
    SERVER_IP will be ssh key
    SSH_PRIVATE_KEY will be inside text content copy and paste it
after that push code 

*** Note : Check logs if there is issue it will show in action tab 
mostly server permission issue