import { useState } from 'react'

import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from '../Avatar/Avatar'

import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeCount() {
    setLikeCount((state) => {
      return state + 1
    }) // Através do parametro da arrow function, conseguimos acessar o valor mais recente do estado.
  } // Atualizar o estado nesse padrão é recomendado quando necessitamos do valor mais recente.

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false}
        src="https://github.com/ngustavo80.png"
        alt="Fotode perfil do usuário"
      />

      <div className={styles.commentContainer}>
        <div className={styles.commentContent}>
          <header className={styles.wrapper}>
            <div className={styles.authorAndTime}>
              <strong>Gustavo do Nascimento</strong>
              <time 
                title="18 de Agosto de 2023 às 09:39" 
                dateTime='2023-18-08 09:39:00'>
                  Cerca de 1h atrás
              </time>
            </div>
            
            <button 
              title="Deletar comentário" 
              className={styles.deleteComment}
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer >
          <button 
            className={styles.aplauseButton}
            onClick={handleLikeCount}          
          >
            <ThumbsUp size={20} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}