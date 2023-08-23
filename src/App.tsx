import { Post, PostType } from './components/Post/Post.tsx'
import { Header } from './components/Header/Header.tsx'
import { Sidebar } from './components/Sidebar/Sidebar.tsx'

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: 'Gustavo Nascimento',
      avatarUrl: 'https://github.com/ngustavo80.png',
      role: 'Web developer'
    },
    publishedAt: new Date("2023-08-19T16:45:30"),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ]
  },
  {
    id: 2,
    author: {
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO @Rocketseat'
    },
    publishedAt: new Date("2023-08-21T16:45:30"),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius elementum libero, sed lobortis nibh congue in.'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ]
  },
  {
    id: 3,
    author: {
      name: 'Mayk Brito',
      avatarUrl: 'https://github.com/maykbrito.png',
      role: 'Educator @Rocketseat'
    },
    publishedAt: new Date("2023-08-20T16:45:30"),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ]
  },
]


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}