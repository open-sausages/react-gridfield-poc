<?php

namespace MyOtherApp\TestModuleExtension;

use SilverStripe\ORM\DataExtension;

class NoteExtension extends DataExtension
{
    private static $db = [
        'Priority' => 'Varchar',
    ];

    private static $summary_fields = [
        'Priority' => 'Priority'
    ];
}