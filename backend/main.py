from flask import Flask
from flask_cors import CORS
from app.routes.transcription import transcription_bp
from app.routes.summary import summary_bp

app = Flask(__name__)
CORS(app)

# Register routes
app.register_blueprint(transcription_bp)
app.register_blueprint(summary_bp)

if __name__ == "__main__":
    app.run(debug=True)

