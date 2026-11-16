import ProgressCounter from '@/components/progress-counter';

export default function Home() {
  return (
    <main className='shell'>
      <section className='hero'>
        <span className='eyebrow'>Next Lab · App Router</span>
        <h1>Изучаем Next.js через маленькие работающие фичи.</h1>
        <p>
          Это чистая учебная база. В каждой теме будет один законченный пример, разбор того, что
          делает Next.js, и короткое задание для самостоятельной практики.
        </p>
      </section>
      <section className='grid' aria-label='Первый урок'>
        <article className='card'>
          <span className='eyebrow'>Урок 1</span>
          <h2>Серверный компонент</h2>
          <p>
            Этот файл — <code>app/page.tsx</code>. Он выполняется на сервере по умолчанию: здесь
            можно получать данные и не отправлять лишний JavaScript в браузер.
          </p>
          <code className='code'>app/page.tsx → маршрут /</code>
        </article>
        <article className='card'>
          <span className='eyebrow'>Интерактивность</span>
          <h2>Точечный Client Component</h2>
          <p>
            Счётчик ниже живёт в отдельном файле с <code>&quot;use client&quot;</code>. Только эта
            маленькая часть попадает в клиентский JavaScript.
          </p>
          <ProgressCounter />
        </article>
      </section>
      <p className='note'>
        Первое задание: открой <code>components/progress-counter.tsx</code>, добавь кнопку
        «Сбросить» и объясни, почему <code>useState</code> нельзя вызвать прямо в этой странице.
      </p>
    </main>
  );
}
