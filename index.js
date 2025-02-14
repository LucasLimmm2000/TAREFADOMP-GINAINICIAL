const feedBack = document.getElementById('feedBack');
        const inputName = document.getElementById('inputName');
        const submitButton = document.getElementById('submitButton');
        const feedbackHistory = document.getElementById('feedbackHistory');

        // Adicionando traqueamento para o botão de adião
        submitButton.addEventListener('click', function () {
            const name = inputName.value.trim();
            const feedback = feedBack.value.trim();

            if (name !== '' && feedback !== '') {
                // Criando um elemento para os cards
                const feedbackCard = document.createElement('div');
                feedbackCard.classList.add('card');

                const nameElement = document.createElement('h2');
                nameElement.textContent = name;
                const feedbackElement = document.createElement('p');
                feedbackElement.textContent = feedback;

                // linkando os elementos na div criada
                feedbackCard.appendChild(nameElement);
                feedbackCard.appendChild(feedbackElement);

                // linkando os elementos na  div do html
                feedbackHistory.appendChild(feedbackCard);

                // limpando os elementos depois do submit
                inputName.value = '';
                feedBack.value = '';
            } else {
                alert('Por favor, preencha os valores de entrada');
            }
        });