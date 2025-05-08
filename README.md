# Real Estate Price Prediction

This project is a Flask web app that predicts real estate prices based on user input.

## Features
- Trained ML model (`model.pkl`) for predictions
- Web interface using Flask and HTML templates
- Easy-to-use input form

## How to Run

1. Clone the repo:
git clone https://github.com/priscillab9/Real_Estate.git


2. Create a virtual environment:
python -m venv venv

3. Activate the environment:
- Windows: `venv\Scripts\activate`
- Mac/Linux: `source venv/bin/activate`

4. Install dependencies:
pip install -r requirements.txt

5. Run the app:
python app.py

6.Open your browser and go to:
http://localhost:5000

## Example

Enter details in the form and click **Predict** to get the price.


## Notes
- Make sure `model.pkl` is present in the root folder.
- Add `.gitignore` to avoid pushing virtual environments and cache files.


