 const card = document.getElementById('card');

        function dislike() {
            card.classList.add('disliked');
            setTimeout(() => {
                // Entfernen der Karte nach der Animation
                card.remove();
            }, 300);
        }

        function like() {
            card.classList.add('liked');
            setTimeout(() => {
                // Entfernen der Karte nach der Animation
                card.remove();
            }, 300);
        }
