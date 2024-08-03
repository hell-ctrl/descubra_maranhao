'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      {
        attraction_id: 1,
        photo_url: "https://media.gettyimages.com/id/988161694/pt/foto/young-man-walking-on-the-sand-dunes-of-len%C3%A7ois-maranhenses.jpg?s=612x612&w=0&k=20&c=I4gEUzJOnSswX9wCCJLx1FdoWd17j2AXHiJDmg616Gg=",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 1,
        photo_url: "https://media.gettyimages.com/id/1165666113/pt/foto/len%C3%A7%C3%B3is-maranhenses-national-park.jpg?s=612x612&w=0&k=20&c=yCkRXbUQ7ka6a_KdBR0ZGMcaiJqWL6WnKS4VHBju-nU=",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 1,
        photo_url: "https://media.gettyimages.com/id/1165658622/pt/foto/aerial-view-len%C3%A7%C3%B3is-maranhenses-national-park.jpg?s=612x612&w=0&k=20&c=ndt7RW1kEEns6_2GUax9i4hI20Y7CBdGGTPqeKGZgz0=",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 1,
        photo_url: "https://media.gettyimages.com/id/995011350/pt/foto/young-muscular-man-on-the-sands-of-len%C3%A7ois-maranhenses-watching-the-sunset.jpg?s=612x612&w=0&k=20&c=Ic7QNKtQSGDcUZiHc7TmFaxkKNu3Cnph_8HLw0sIDzg=",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 1,
        photo_url: "https://media.gettyimages.com/id/872908506/pt/foto/sunset-at-len%C3%A7%C3%B3is-maranhenses-brazil.jpg?s=612x612&w=0&k=20&c=Wdzh5-EnTr-8V4SOJU0U_K6ya8n6DXZijGP49ezmVbc=",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 2,
        photo_url: "https://turismosaoluis.com.br/wp-content/uploads/2023/10/PALACIO-DOS-LEOES-768x511.jpg.webp",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 2,
        photo_url: "https://media-cdn.tripadvisor.com/media/photo-s/21/7b/85/07/caption.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 2,
        photo_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/d8/9a/e3/palacio-dos-leoes.jpg?w=600&h=500&s=1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 2,
        photo_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/7f/ba/1b/palacio-dos-leoes.jpg?w=600&h=500&s=1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 2,
        photo_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/70/e8/24/fachada-do-palacio-dos.jpg?w=600&h=500&s=1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 3,
        photo_url: "https://www.escolhaviajar.com/wp-content/uploads/2021/01/fotos-da-chapada-das-mesas-Morro-do-Chapeu-3.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 3,
        photo_url: "https://www.escolhaviajar.com/wp-content/uploads/2021/01/fotos-da-chapada-das-mesas-Poco-Azul-3.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 3,
        photo_url: "https://www.escolhaviajar.com/wp-content/uploads/2021/01/fotos-da-chapada-das-mesas-Cachoeira-da-Prata-1.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 3,
        photo_url: "https://www.escolhaviajar.com/wp-content/uploads/2021/01/fotos-da-chapada-das-mesas-portal-da-chapada-3.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 3,
        photo_url: "https://www.escolhaviajar.com/wp-content/uploads/2021/01/fotos-da-chapada-das-mesas-Morro-do-Chapeu-2.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 4,
        photo_url: "https://lh5.googleusercontent.com/p/AF1QipOWzeT_930dqYYff3UgpSRRbt-np6tkDIDsSAhM=w590-h416-n-k-no",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 4,
        photo_url: "https://lh5.googleusercontent.com/p/AF1QipPnM2YyHYKL8HP_hNVAdDp3ZfOyfQevoNyqlimu=w554-h416-n-k-no",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 4,
        photo_url: "https://lh5.googleusercontent.com/p/AF1QipPQk9WHyeNBEF5lnKUfVKG-MXZaIgoHTV72fNFK=w554-h416-n-k-no",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 4,
        photo_url: "https://lh5.googleusercontent.com/p/AF1QipNABrMct2RcTPGxz56arl7-7FQEaif99ayJMFks=w554-h416-n-k-no",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 4,
        photo_url: "https://lh5.googleusercontent.com/p/AF1QipPilm_KdGffGDog1ClfAREwz17LeBJMsn24uJgt=w622-h416-n-k-no",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 5,
        photo_url: "https://lh3.googleusercontent.com/p/AF1QipM8Yi8QR5cY-UKS8RR01s5tqkdISvFnPPwLp33m=s1350-w720-h1350",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 5,
        photo_url: "https://lh3.googleusercontent.com/p/AF1QipMOScGWAOofTNJ2a4tBsulUm-qTDk76hxEw9F_Z=w720-h1350",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 5,
        photo_url: "https://lh3.googleusercontent.com/p/AF1QipNXuKRJuB39NCpbrKpQJoxUSOTycuxEUfldkQOF=s1350-w720-h1350",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 6,
        photo_url: "https://www.voltologo.net/wp-content/uploads/2023/02/centro-historico-de-sao-luis-dicas-768x515.jpg.webp",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 6,
        photo_url: "https://www.essemundoenosso.com.br/wp-content/uploads/2013/12/centro-hist%C3%B3rico-de-s%C3%A3o-lu%C3%ADs-20.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 6,
        photo_url: "https://caminhosmelevem.com/wp-content/uploads/2021/07/sao-luis-maranhao-edit-27-768x510.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 6,
        photo_url: "https://imperiodasmilhas.com/wp-content/uploads/2023/10/6-64-1.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 7,
        photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fachada_do_Museu_Casa_Hist%C3%B3rica_de_Alc%C3%A2ntara%2C_Maranh%C3%A3o%2C_2015..jpg/600px-Fachada_do_Museu_Casa_Hist%C3%B3rica_de_Alc%C3%A2ntara%2C_Maranh%C3%A3o%2C_2015..jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 7,
        photo_url: "https://jpturismo.com.br/wp-content/uploads/2023/02/Alcantara-Projeto-Pao-musica-e-poesia-Foto-1.jpg.webp",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 7,
        photo_url: "https://photo620x400.mnstatic.com/e5110731f37177b00ece58c3430d484f/museu-casa-historica-de-alcantara.jpg?quality=70&format=pjpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        attraction_id: 7,
        photo_url: "https://www.diariodebordoslz.com.br/wp-content/uploads/2022/05/patio-interno-768x576.jpeg",
        created_at: new Date(),
        updated_at: new Date()
      }
    ];
    
    return queryInterface.bulkInsert('attraction_photos', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('attraction_photos', null, {});
  }
};
