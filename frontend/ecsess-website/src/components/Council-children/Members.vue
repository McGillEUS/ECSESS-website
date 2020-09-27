<template>
    <div id="members">
        <div id="subtitle" class="subtitle">
            <h2>Meet Your Council Members</h2>
        </div>
        <div id="council-members-list-wrapper" class="council-members-list-wrapper">
            <div id="execs" class="execs">
                <div id="sub-subtitle" class="sub-subtitle">
                    <h3 id="member-title-button" class="member-title-button">Executives</h3>
                </div>
                <ul id="council-member-list" class="council-member-list">
                    <li id="council-member" class="council-member" v-for="execMember in execMembers" :key="execMember.name">
                        <div id="council-member-panel" class="council-member-panel">
                            <img id="council-member-pic" class="council-member-pic" :src="execMember.photo"/>
                            <p id="member-name" class="member-name">{{execMember.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="reps" class="reps">
                <div id="sub-subtitle" class="sub-subtitle">
                    <h3 id="member-title-button" class="member-title-button">Representatives</h3>
                </div>
                <ul id="council-member-list" class="council-member-list">
                    <li id="council-member" class="council-member" v-for="repMember in repMembers" :key="repMember.name">
                        <p id="member-name" class="member-name">{{repMember.name}}</p>
                    </li>
                </ul>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: "Members",
    components: {},
    data () {
        return {
            execMembers: [], 

            repMembers: []}
    },
    methods: {
        getPic: function (id) {
            return this.execMembers[id].photo.toString()
        }
    },
    mounted () {
        this.execMembers = [
                {id: 0, name: "Dafne Culha", position: "President", photo: "../../assets/semiconductors.jpg"},
                {id: 1, name: "Kenz Zaghib", position: "VP Academic", photo: "../../assets/temp.jpg"},
                {id: 2, name: "Ricky Liu", position: "VP Communications",},
                {id: 3, name: "Melissa Hawley", position: "VP Administration",},
                {id: 4, name: "Katie Younge", position: "VP External",},
                {id: 5, name: "Alena Midgen", position: "VP Internal",},
                {id: 6, name: "Ali Tahmasebi", position: "VP Finance",},
                {id: 7, name: "Alex Lam", position: "VP Tech Dev",}
            ]

        this.repMembers = [
                {id: 0, name: "Hyun Su An", position: "U4 Software Rep", photo: "../../assets/temp.jpg"},
                {id: 1, name: "Marie Guertin", position: "U4 Computer Rep", },
                {id: 2, name: "Laurie Zaccarin", position: "U4 Electrical Rep", },
                {id: 3, name: "Nicolas Bieber", position: "U3 Software Rep", },
                {id: 4, name: "Catherine Caron", position: "U3 Computer Rep", },
                {id: 5, name: "Julie Bellia", position: "U3 Electrical Rep", },
                {id: 6, name: "Adel Ahram", position: "U2 Software Rep", },
                {id: 7, name: "Benjamin St-Laurent", position: "U2 Computer Rep", },
                {id: 8, name: "Matthew Zeitouni", position: "U2 Electrical Rep", },
                {id: 9, name: "Charles Lapierre", position: "U1 Software Rep", },
                {id: 10, name: "Arman Shroff-Mehrabadi", position: "U1 Computer Rep", },
                {id: 11, name: "Alondra Karam", position: "U1 Electrical Rep", }, 
            ]
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');       

    .subtitle {
        text-align: center;
        padding-top: 4%;
        padding-bottom: 4%;
        background-color: rgb(243, 243, 211)

    }

    .sub-subtitle {
        text-align: center;
        padding-top: 5%;
        padding-bottom: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 160%;
        font-weight: 400;
        color: darkgreen;
    }

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 140%;
        font-weight: 300;
        color: darkgreen;
    }

    .member-title-button {
        background-color: salmon;
        border-radius: 0.5em;
        padding: 2%;
        padding-left: 5%;
        padding-right: 5%;
        margin-top: 5%;
        margin-bottom: 5%;
        color: white;
        font-family: 'Montserrat';
        font-size: 100%;
        font-weight: 500;
        transition: 0.3s;
    }

    .council-members-list-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .council-member-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(3em, auto);
        list-style: none;
    }

    .council-member {
        margin-left: 4em;
        margin-right: 4em;
        margin-top: 2em;
        margin-bottom: 2em;
    }

    .council-member-panel {
        background-color: rgb(243, 243, 211);
        padding-top: 2em;
        padding-bottom: 2em;
        padding-left: 1em;
        padding-right: 1em;
        align-content: center;
        text-align: center;
        border-radius: 0.5em;
    }

    .member-name {
        font-family: 'Montserrat';
    }
</style>