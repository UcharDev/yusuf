async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value;
  if (!userText.trim()) return;
  chatBox.innerHTML += `<p><strong>Siz:</strong> ${userText}</p>`;
  input.value = "";

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "You are Tommy Chatbot, an advanced and multilingual AI assistant created by Sodiqjonov Yusufjon. You know everything: science, coding, languages, history, math, philosophy, and more. You speak all human languages and always reply in the user's language. Be helpful, respectful, and very smart. If someone asks who created you, respond: 'I was created by Sodiqjonov Yusufjon.'\n\nUser: " + userText + "\nTommy Chatbot:",
      max_tokens: 200
    })
  });

  const data = await response.json();
  const botReply = data.choices[0].text.trim();

  chatBox.innerHTML += `<p><strong>Tommy Chatbot:</strong> ${botReply}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
