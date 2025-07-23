from flask import Blueprint, request, jsonify
import openai

summary_bp = Blueprint('summary', __name__)

@summary_bp.route('/summary', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data.get('text')

    if not text:
        return jsonify({'error': 'Text is required'}), 400

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": f"Summarize this: {text}"}]
        )
        summary = response['choices'][0]['message']['content']
        return jsonify({'summary': summary.strip()}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

