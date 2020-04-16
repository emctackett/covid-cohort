# CS361 - COVIDCoach
This is a project built for Oregon State University's CS361 course - Software Engineering I.

There are three primary goals for COVIDCoach - 
(1) help people avoid catching the virus,
(2) help people learn about the virus, and
(3) help people connected and in touch with others. 

## Built With
* [Python 3](https://docs.python.org/3/)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [Jinja](https://jinja.palletsprojects.com/en/2.11.x/)
* [React](https://reactjs.org/)


## Authors
* **Elizabeth Tackett** - [emctackett](https://github.com/emctackett)
* **Laura Jiang** - [laurajjiang](https://github.com/laurajjiang)
* **Suzana Shaver** - [shaversu](https://github.com/shaversu)
* **Caleb Schmidt** - [calebschmidt](https://github.com/calebschmidt)
* **Mikayla Friend** - [mikaylafr](https://github.com/MikaylaFr)


## Running
To run the project, first clone it and `cd` into the directory:
```bash
git clone https://github.com/emctackett/covid-cohort.git
cd covid-cohort
```

Ensure all Python dependencies are installed:
```bash
pip install -r requirements.txt
```

If you have Python 3 _and_ 2 installed, you may need to specify `pip3` instead of `pip` for installation.

Once dependencies are installed, simply run the `app.py` script with Python:
```bash
python app.py
```
Again, if you have multiple versions of Python installed you may need to specify `python3` instead of `python`.

You should see the app start up and start logging to `stdout`. If this is on your local machine, you should be able to navigate to `localhost:5000` in your browser and see the current site.
