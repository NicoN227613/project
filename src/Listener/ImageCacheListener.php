<?php

namespace App\Listener;

use App\Entity\ImageProduct;
use Vich\UploaderBundle\Event\Event;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;

class ImageUploadListener
{

	private $cacheManager;
	private $uploaderHelper;

	public function __construct(CacheManager $cacheManager, UploaderHelper $uploaderHelper)
	{
	    $this->cacheManager = $cacheManager;
	    $this->uploaderHelper = $uploaderHelper;
	}

	public function onVichUploaderPreRemove(Event $event): void
	{
	    $entity = $event->getObject();
	    
	    if(!$entity instanceof ImageProduct) {
	        return;
	    }
	    
	    $this->cacheManager->remove($this->uploaderHelper->asset($entity, 'imageFile'));
	}

}