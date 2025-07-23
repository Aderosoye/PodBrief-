from flask import Blueprint, request, jsonify
from app.services.whisper_service import transcribe_audio

transcription_bp = Blueprint('transcription', __name__)

@transcription_bp.route('/transcribe', methods=['POST'])
def transcribe():
    audio_file = request.files.get('audio')
    if not audio_file:
        return jsonify({'error': 'No audio file uploaded'}), 400

    try:
        transcription = transcribe_audio(audio_file)
        return jsonify({'transcription': transcription}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
