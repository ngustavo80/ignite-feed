import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'

import styles from './Post.module.css'

interface Author {
  name: string,
  avatarUrl: string,
  role: string
}

interface Content {
  type: 'paragraph' | 'link'; 
  content: string
}

export interface PostType{
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(post.publishedAt, "dd 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDelete: string) {
    const commentsArrayWithoutTheDeletedOne = comments.filter(comment => comment !== commentToDelete)

    setComments(commentsArrayWithoutTheDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.userInfo}>
          <Avatar 
            src={post.author.avatarUrl}
            hasBorder={false}
          />
          <div>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time 
          title={publishedDateFormatted} 
          dateTime={post.publishedAt.toISOString()}
        >
          {publishDateRelativeToNow}
        </time>
      </header>

      <div className={styles.postContent}>
        {
          post.content.map(line => {
            if(line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={line.content}><a href="">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <span>Deixe seu feedback</span>
        <textarea 
          placeholder='Deixe seu comentário...'
          name='commentText'
          onChange={handleNewCommentText}
          onInvalid={handleNewCommentInvalid}
          value={newCommentText}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      {
        comments.map(comment => {
          return (
            <Comment 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })
      }
    </article>
  )
}