from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    # Not passing any variables to the template yet
    return render_template('index.html')


@app.route('/info')
def info():
    return render_template('info.html')


@app.route('/reminders')
def reminders():
    return render_template('reminders.html')


@app.route('/social-distancing')
def social_distancing():
    return render_template('social_distancing.html')


@app.route('/should-i-go-out')
def should_i_go_out():
    return render_template('should_i_go_out.html')


if __name__ == '__main__':
    # 0.0.0.0 makes it accessible over the network
    # If running locally, navigate to 'localhost:<port #>' in browser
    # Debug gives us handy feedback in dev/testing
    # Eventually we'll move these settings out to a config.py file
    app.run('0.0.0.0', port=5000, debug=True)