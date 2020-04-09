from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    # Not passing any variables to the template yet
    return render_template('index.html')


if __name__ == '__main__':
    # 0.0.0.0 makes it accessible over the network
    # If running locally, navigate to 'localhost:<port #>' in browser
    # Debug gives us handy feedback in dev/testing
    # Eventually we'll move these settings out to a config.py file
    app.run('0.0.0.0', port=5000, debug=True)