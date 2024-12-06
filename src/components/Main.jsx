import React from 'react';
import blogImage1 from '../blog-image-1.jpg';
import blogImage2 from '../blog-image-2.jpg';

const Main = () => {
  return (
    <main>
        <article>
  
  <time dateTime="2020-11-12">11/12/20</time>
  <h2>On the Street in Brooklyn</h2>
  <img src={ blogImage1 } alt="A streetscape" width="100%"/>
  
  <p>Corem ipsum dolor sit, amet consectetur adipisicing elit. Eius vel nemo officia adipisci obcaecati ipsam minima ab sunt quasi ex ducimus, voluptate optio debitis? Ratione quibusdam labore exercitationem rerum incidunt! Corem ipsum dolor sit, amet consectetur adipisicing elit. Eius vel nemo officia adipisci obcaecati ipsam minima ab sunt quasi ex ducimus, voluptate optio debitis? Ratione quibusdam labore exercitationem rerum incidunt!Corem ipsum dolor sit, amet consectetur adipisicing elit. Eius vel nemo officia adipisci obcaecati ipsam minima ab sunt quasi ex ducimus, voluptate optio debitis? Ratione quibusdam labore exercitationem rerum incidunt!</p>
  <aside>
    <h3>Related Articles</h3>
    <ul>
      <li><a href="#">Lorem ipsum dolor sit</a></li>
      <li><a href="#">Eius vel nemo officia</a></li>
    </ul>
  </aside>
  <a href="#continue" className="continues">Continues...</a>
</article>

<article>
  <time datetime="2020-11-11">11/11/20</time>
  <h2>Vintage in Vogue</h2>
  <img src={ blogImage2 } alt="models in dress" width="100%" />
  
  <p>Sorem ipsum dolor sit amet consectetur, adipisicing elit. Iste recusandae soluta corrupti optio quis neque blanditiis voluptatum, in laudantium, reprehenderit odit eius odio saepe explicabo dolorum? Nisi nemo autem et. Corem ipsum dolor sit, amet consectetur adipisicing elit. Eius vel nemo officia adipisci obcaecati ipsam minima ab sunt quasi ex ducimus, voluptate optio debitis? Ratione quibusdam labore exercitationem rerum incidunt! Corem ipsum dolor sit, amet consectetur adipisicing elit. Eius vel nemo officia adipisci obcaecati ipsam minima ab sunt quasi ex ducimus, voluptate optio debitis? Ratione quibusdam labore exercitationem rerum incidunt!</p>
  <aside>
    <h3>Related Articles</h3>
    <ul>
      <li><a href="#">Lorem ipsum dolor sit</a></li>
      <li><a href="#">Eius vel nemo officia</a></li>
    </ul>
  </aside>
  <a href="#continue" className="continues">Continues...</a>
</article>
     
    </main>
  );
};



export default Main;
