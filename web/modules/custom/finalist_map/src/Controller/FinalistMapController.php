<?php

namespace Drupal\finalist_map\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for Finalist - Map routes.
 */
class FinalistMapController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {
    $build['content'] = [
      '#theme' => 'finalist_map_osm',
    ];

    return $build;
  }

}
