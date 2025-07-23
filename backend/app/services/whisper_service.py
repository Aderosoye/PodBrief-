import openai
import tempfile

def transcribe_audio(audio_file):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as tmp:
        audio_file.save(tmp.name)
        tmp.flush()
        response = openai.Audio.transcribe("whisper-1", open(tmp.name, "rb"))
    return response["text"]
