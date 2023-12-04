

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit():
    selected_option = request.form['dropdownMenu']
    
    if selected_option == 'option2':
        # Redirect or handle Admin Login
        return redirect('/admin_login')
    else:
        # Handle default or invalid option
        return redirect('/')


@app.route('/admin_login')
def admin_login():
    # Render the admin login template or handle logic
    return render_template('adminLogin.html')

if __name__ == '__main__':
    app.run(debug=True)