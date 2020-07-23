import React, { useState } from 'react';

function App() {
  const [profile, updateProfile] = useState({
    firstName: 'Jay', 
    lastName: 'Miller',
    resume: 'https://kjaymiller.com/static/files/Jay_Miller_-_Software_Engineer.pdf',
    github: 'kjaymiller',
    flex: 'https://kjaymiller.com'
    })

  const [loginStatus, setStatus] = useState('LoggedIn')

  const logoutText = <h1>Hello {profile.firstName}! <strong><a href="#">Logout</a></strong></h1>
  const header =
    <nav class="flex items-center justify-between p-5 bg-indigo-200">
      <h1 class="font-semibold text-3xl">Mintors</h1>
      <h1 id="loginState" class="text-2xl font-light">{loginStatus == false ? 'Login' : logoutText}</h1>
    </nav>

  const [messages, setMessages] = useState([])
  const [requestTitle, setTitle] = useState("")
  const [comments, addComment] = useState("")
  const [likes, addLike] = useState(0)
  const [requestBody, setBody] = useState("")

  function addMessage (message) {
    message.preventDefault()
    let newMessage = {requestTitle, requestBody, likes, comments};
    let copy = [...messages];
    copy.push(newMessage);
    setMessages(copy);
  }




  const requestTips =
    <div class='border-2 border-gray-600 bg-gray-200 p-4 rounded'>
     <h1 class="font-bold pb-3">⭐ Some Tips to Help Get the Best Help! ⭐</h1>
    <ul class="list-inside list-disc">
    <li>Make Sure you are sharing your [  ] Resume, [  ] GitHub, and [  ] Best Work!</li>
    <li>Try not to self diagnose 👨‍⚕️</li>
    <li>Be Very Specific in Your Question (You can Always Ask More!)</li>
    </ul>
    </div>;

  const newRequestCenter =
    <div class="mt-5">
      {requestTips}
      <div class="my-4" id="request-form">
        <h1 class="font-bold text-4xl">New Request</h1>
      {
      <form class="w-50 m-6 bg-indigo-200" onSubmit={addMessage}>
        <div class="m-4 p-4">
        <label for="#request-title" class="">Title</label>
          <input class='border-2 border-gray-600' type="text" name="requestTitle" id="request-title" onChange={evnt => setTitle(evnt.target.value)} />
        </div>
        <div class="my-2 p-4">
          <label for="#request-Body">Body</label>
          <textarea class='border-2 border-gray-600 w-4/5 p-5' rows="20" type="text" name="requestBody" id="request-body" onChange={evnt => setBody(evnt.target.value)}></textarea>
        </div>
        <div class="text-center">
          <button class="w-1/2 h-20 rounded bg-gray-500 text-white" type="submit">Submit</button>
        </div>
      </form>
  }
      </div>
    </div>

  const profileCenter =
    <div class="mx-5 w-1/3">
      <div>
        <h1 class="font-bold text-2xl">{profile.firstName} {profile.lastName}</h1>
        <h2><strong>Resume: </strong><a href={profile.resume}>View Resume</a></h2>
        <h2><strong>GitHub: </strong><a href={`https://github.com/${profile.github}`}>{profile.github}</a></h2>
        <h2><strong>Flex: </strong><a href={profile.flex}>{profile.flex}</a></h2>
        <div class="border-4 border-gray-200">
        <h2 class="text-2xl">Your Requests</h2>
        {messages.map(m => (
          <div class='border rounded bg-gray-200 border-2 border-gray-400 m-4'>
            <h3 class="text-xl p-4"><strong>{m.requestTitle}</strong></h3>
            <h3 class="text-lg p-4">{m.requestBody}</h3>
          <p class="text-right p-4">{m.likes > 0 ? m.likes + 'Likes': <>No Likes <em>Yet...</em></>}</p>
          <p class="text-right p-4">{m.comments > 0 ? m.comments + 'comments': <>No Comments <em>Yet...</em></>}</p>
          </div>
        )
        )}
      </div>
      </div>
    </div>

  return (
    <div className="App">
      {header}
      <div class="my-5 mx-5 w-full flex justify-around">
      {profileCenter}
      {newRequestCenter}
      </div>
    </div>
  )
}

export default App;
