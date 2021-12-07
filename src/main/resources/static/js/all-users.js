let bodyTable =``;

fetch('http://localhost:8044/api/users/admin')
    .then((response) => {
        return response.json();
    })
    .then( users => {
        for (let i = 0; i < users.length; i++) {
            bodyTable += `
            <td >${users[i].id}</td>
            <td >${users[i].name}</td>
            <td> ${users[i].surname}</td>
            <td >${users[i].email}</td>
     
            <td id="td">
                <button id="update"
                        type="button"
                        data-toggle="modal"
                        data-target="#updateUser"
                          onclick="onGetId('${users[i].id}',
                          '${users[i].name}',
                           '${users[i].surname}',
                     '      ${users[i].email}',
                          )"        
                        >
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="20"
                            fill="currentColor"
                            class="bi bi-arrow-repeat"
                            viewBox="0 0 16 16"
                    >
                        <path
                                d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                        />
                        <path
                                fill-rule="evenodd"
                                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                        />
                    </svg>
                </button>
                <button  id="delete" type="button"
                        data-toggle="modal"
                        data-target="#deleteUser"
                      onclick=" del(${users[i].id})" 
                >
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
            </td>
        </tr>
    `;
        }

        setTimeout(function () {
            document.getElementById("testing").innerHTML = bodyTable;
        },10)
    });

