---
title: "Quitar etiquetas p de las imágenes en WordPress"
date: "2019-05-29"
---

<?php
function filter\_ptags\_on\_images($content) { 
    return preg\_replace('/<p>\\s\*(<a .\*>)?\\s\*(<img .\* \\/>)\\s\*(<\\/a>)?\\s\*<\\/p>/iU', '\\1\\2\\3', $content); 
} 

[http://hookr.io/functions/filter\_ptags\_on\_images/](http://hookr.io/functions/filter_ptags_on_images/)
