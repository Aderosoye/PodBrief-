from flask import Blueprint, request, jsonify
from app.services.whisper_service import transcribe_audio

transcription_bp = Blueprint('transcription', __name__)

@transcription_bp.route('/transcribe', methods=['POST'])
def transcribe():
    file = request.files['audio']
    transcript = transcribe_audio(file)
    return jsonify({"transcript": transcript})

