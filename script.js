const container = document.querySelector('.container')
const delBtn = document.querySelectorAll('.del-btn')
const overlay = document.querySelector('.overlay')
const dltModal = document.querySelector('.dlt-modal')
const cancelModal = document.querySelector('.cancel-btn')
const sendBtn = document.querySelectorAll('.send-btn')
const newComment = document.querySelector('.current')
const userComment = document.getElementById('userComment')
const delComment = document.querySelector('.delete-btn')

//del modal visibilty
delBtn.forEach(btn => {
  btn.addEventListener('click', delModal)
  delComment.addEventListener('click', () => {
    const target = btn.parentNode.parentNode.parentNode
    console.log(target)
    target.style.visibility = "hidden"
    target.style.width = 0
    target.style.height = 0
    dltModal.style.visibility = "hidden"
    overlay.style.visibility = "hidden"
  })
})

function delModal() {
  dltModal.style.visibility = "visible"
  overlay.style.visibility = "visible"
}

//remove modal visibility 
cancelModal.addEventListener('click', () => {
  dltModal.style.visibility = "hidden"
  overlay.style.visibility = "hidden"
})

// add new comment
sendBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    newComment.insertAdjacentHTML('beforeend',
      `<div class="main-comment">
              <div class="vote-comment">
                <div class="vote">
                  <i class="fa-solid fa-minus"></i>
                  <span class="input" role="textbox" contenteditable="">0</span>
                  <i class="fa-solid fa-plus"></i>
                </div>
                <div class="buttons-mobile">
                  <button class="del-btn" onclick="delModal()"><img src="images/icon-delete.svg" alt="">Delete</button>
                  <button class="edit-btn"><img src="images/icon-edit.svg" alt="">Edit</button>
                </div>
              </div>
              <div class="comment-card">
                <div class="profile">
                  <div class="user-profile">
                    <img src="images/avatars/image-amyrobson.png" alt="">
                    <p class="username">amyrobson <span>you</span></p>
                    <p class="creation-time">1 month ago</p>
                  </div>
                  <div class="buttons">
                    <button class="del-btn" onclick="delModal()"><img src="images/icon-delete.svg" alt="">Delete</button>
                    <button class="edit-btn"><img src="images/icon-edit.svg" alt="">Edit</button>
                  </div>
                </div>
                <div class="comment">${userComment.value}
                </div>
              </div>
            </div>`
    )
    userComment.value = ""
  })
})

//delete comment
// delComment.addEventListener('click', )