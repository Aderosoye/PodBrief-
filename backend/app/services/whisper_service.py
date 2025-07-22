import openai
import tempfile

def transcribe_audio(audio_file):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as tmp:
        audio_file.save(tmp.name)
        with open(tmp.name, "rb") as f:
            transcript = openai.Audio.transcribe("whisper-1", f)
    return transcript['text']

