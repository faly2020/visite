
 // Code JavaScript
 // Obtenir la référence de l'élément de sélection
 var serviceSelect = document.getElementById('services');


// Fonction pour afficher les plages horaires en fonction du service sélectionné
function displayPlageHoraire(service) {
    // Référence à la div où les plages horaires seront affichées
    var plageHoraireDiv = document.getElementById('plage-horaire');

    // Exemple de plages horaires pour chaque service
    var plagesHoraires = {
        chirurgical: "9h00 - 12h00",
        ophtalmologique: "13h00 - 16h00",
        dentiste: "10h30 - 14h30"
    };

    // Afficher la plage horaire correspondante au service sélectionné
    plageHoraireDiv.innerHTML = "<p>Plage horaire : " + plagesHoraires[service] + "</p>";
}

 // Ajouter un écouteur d'événements pour détecter les changements de sélection
 serviceSelect.addEventListener('click', function () {
     // Obtenir la valeur sélectionnée
     var selectedService = serviceSelect.value;

     // Appeler la fonction pour afficher les plages horaires en fonction du service
     displayPlageHoraire(selectedService);
 });

 
 function reservation() {
    // Récupérer les valeurs des champs de saisie
    var service = document.getElementById('serviceInput').value;
    var date = document.getElementById('dateInput').value;
    var time = document.getElementById('timeInput').value;

    // Vérifier si les champs obligatoires sont remplis
    if (service.trim() === '' || date.trim() === '' || time.trim() === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Ici, vous pouvez ajouter votre logique de réservation
    // par exemple, envoyer les données au serveur via AJAX.

    // Exemple d'affichage d'un message de réservation réussie
    alert('Réservation réussie!\nService: ' + service + '\nDate: ' + date + '\nHeure: ' + time);
}



function reserver() {
    // Récupérer les valeurs des champs de saisie
    var date = document.getElementById('date').value;
    var heure = document.getElementById('heure').value;
    var nombrePersonnes = document.getElementById('nombrePersonnes').value;

    // Vérifier si les champs obligatoires sont remplis
    if (date.trim() === '' || heure.trim() === '' || nombrePersonnes.trim() === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Ici, vous pouvez ajouter votre logique de réservation
    // par exemple, envoyer les données au serveur via AJAX.

    // Exemple d'affichage d'un message de réservation réussie
    alert('Réservation réussie!\nDate: ' + date + '\nHeure: ' + heure + '\nNombre de personnes: ' + nombrePersonnes);
}

 
// Exemple de structure pour les réservations
  var reservations = [
    { id: 1, date: '2023-10-15', heure: '15:30', nombrePersonnes: 3 },
    { id: 2, date: '2023-10-20', heure: '12:00', nombrePersonnes: 2 },
    // ... Ajoutez d'autres réservations ici ...
];

// Fonction pour afficher les réservations dans un tableau
function afficherReservations(tableId, reservations) {
    var table = document.getElementById(tableId);
    table.innerHTML = ""; // Effacer le contenu actuel du tableau

    // ... Logique pour afficher les en-têtes du tableau ...

    reservations.forEach(function (reservation) {
        // ... Logique pour afficher chaque réservation dans une ligne du tableau ...
    });
}

// Fonction pour afficher les réservations passées et à venir
function afficherTableauDeBord() {
    var dateActuelle = new Date().toISOString().split('T')[0];

    var reservationsPassees = reservations.filter(function (reservation) {
        return reservation.date < dateActuelle;
    });

    var reservationsAVenir = reservations.filter(function (reservation) {
        return reservation.date >= dateActuelle;
    });

    afficherReservations('reservationsPassees', reservationsPassees);
    afficherReservations('reservationsAVenir', reservationsAVenir);
}

// Appeler la fonction pour afficher le tableau de bord au chargement de la page
window.onload = function () {
    afficherTableauDeBord();
};

// Fonction pour la réservation
function reserver() {
    // Récupérer les valeurs des champs de saisie
    var date = document.getElementById('date').value;
    var heure = document.getElementById('heure').value;
    var nombrePersonnes = document.getElementById('nombrePersonnes').value;

    // Vérifier si les champs obligatoires sont remplis
    if (date.trim() === '' || heure.trim() === '' || nombrePersonnes.trim() === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Ici, vous pouvez ajouter votre logique de réservation
    // par exemple, envoyer les données au serveur via AJAX.

    // Exemple d'affichage d'un message de réservation réussie
    alert('Réservation réussie!\nDate: ' + date + '\nHeure: ' + heure + '\nNombre de personnes: ' + nombrePersonnes);

    // Rafraîchir le tableau de bord après la réservation
    afficherTableauDeBord();
}

// Fonction pour annuler une réservation
function annulerReservation() {
    // Récupérer l'ID de la réservation à annuler
    var idReservation = prompt('Veuillez saisir l\'ID de la réservation à annuler:');

    // Vérifier si l'ID est valide
    if (!idReservation || isNaN(idReservation)) {
        alert('ID de réservation invalide.');
        return;
    }

    // Trouver l'index de la réservation dans le tableau
    var index = reservations.findIndex(function (reservation) {
        return reservation.id === parseInt(idReservation);
    });

    // Vérifier si la réservation existe
    if (index === -1) {
        alert('Réservation non trouvée.');
        return;
    }

    // Supprimer la réservation du tableau
    reservations.splice(index, 1);

    // Rafraîchir le tableau de bord après l'annulation
    afficherTableauDeBord();

    alert('Réservation annulée avec succès.');
}

// Fonction pour modifier une réservation
function modifierReservation() {
    // Récupérer l'ID de la réservation à modifier
    var idReservation = prompt('Veuillez saisir l\'ID de la réservation à modifier:');

    // Vérifier si l'ID est valide
    if (!idReservation || isNaN(idReservation)) {
        alert('ID de réservation invalide.');
        return;
    }

    // Trouver l'index de la réservation dans le tableau
    var index = reservations.findIndex(function (reservation) {
        return reservation.id === parseInt(idReservation);
    });

    // Vérifier si la réservation existe
    if (index === -1) {
        alert('Réservation non trouvée.');
        return;
    }

    // Récupérer les nouvelles valeurs de la réservation
    var nouvelleDate = prompt('Nouvelle date (YYYY-MM-DD):');
    var nouvelleHeure = prompt('Nouvelle heure (HH:mm):');
    var nouveauNombrePersonnes = prompt('Nouveau nombre de personnes:');

    // Mettre à jour les valeurs de la réservation
    reservations[index].date = nouvelleDate || reservations[index].date;
    reservations[index].heure = nouvelleHeure || reservations[index].heure;
    reservations[index].nombrePersonnes = nouveauNombrePersonnes || reservations[index].nombrePersonnes;

    // Rafraîchir le tableau de bord après la modification
    afficherTableauDeBord();

    alert('Réservation modifiée avec succès.');
}

    document.addEventListener('DOMContentLoaded', function () {
        // Initialisez Stripe avec votre clé publique
        var stripe = Stripe('pk_test_51O1VBCAJeKUIa6gmAyoO7bCVi4EWq2URNAggXHPHTH5Jp4MCx9z8kPogYx5ADcuP21bGCiIEd18ol7HRNKvAsEw300lUFofT3R');

        // Gestionnaire d'événement pour le clic sur le bouton "Payer et Réserver"
        document.getElementById('submit').addEventListener('click', function () {
            // Créez un élément de carte
            var elements = stripe.elements();
            var cardElement = elements.create('card');

            // Montrez l'élément du formulaire de carte dans la div "card-element"
            cardElement.mount('#card-element');

            // Utilisez Stripe pour créer un token de carte
            stripe.createToken(cardElement).then(function (result) {
                if (result.error) {
                    // Gestion des erreurs de la carte
                    alert(result.error.message);
                } else {
                    // Envoyez le token au serveur (à implémenter côté serveur)
                    var token = result.token.id;

                    // Envoie du token au serveur pour le traitement (à implémenter côté serveur)
                    fetch('/votre-endpoint-de-paiement', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ token: token }),
                    }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        // Gestion de la réponse du serveur après le paiement
                        console.log(data);
                        alert('Paiement réussi!');
                    }).catch(function (error) {
                        console.error('Erreur lors du paiement:', error);
                        alert('Erreur lors du paiement. Veuillez réessayer.');
                    });
                }
            });
        });
    });

// Fonction pour soumettre un avis
function submitReview() {
    // Récupérer les données de l'avis depuis le formulaire
    var rating = document.querySelector('input[name="rating"]:checked');
    var comment = document.getElementById('comment').value;

    // Vérifier si une évaluation a été sélectionnée
    if (!rating) {
        alert('Veuillez sélectionner une évaluation.');
        return;
    }

    // Créer un nouvel élément d'avis
    var review = document.createElement('div');
    review.innerHTML = '<strong>Évaluation: ' + rating.value + ' stars</strong><br>' +
                       '<p>' + comment + '</p><hr>';

    // Ajouter l'avis à la section des avis
    document.getElementById('reviews').appendChild(review);

    // Effacer le formulaire après la soumission
    document.getElementById('reviewForm').reset();
}

function addService( date, heureDebut, heureFin){
    let Service=document.getElementsById('services').value;

    let para=document.createElement('p');
    para.textContent=' Ce service est disponible le'+ date + 'de' + heureDebut +'h' + 'a'+ heureFin + 'h' ;
    serviceDisponible.appendChild('para');
}
