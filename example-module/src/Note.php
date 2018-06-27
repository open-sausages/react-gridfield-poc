<?php

namespace MyApp\TestModule;

use SilverStripe\ORM\DataObject;

class Note extends DataObject
{
    private static $table_name = 'Note';

    private static $db = [
        'Content' => 'Varchar'
    ];

    private static $summary_fields = [
        'ID' => 'ID',
        'Content' => 'Content',
    ];

    public function requireDefaultRecords()
    {
        parent::requireDefaultRecords();
        if (!self::get()->exists()) {
            foreach(['one', 'two', 'three'] as $note) {
                $n = Note::create([
                    'Content' => 'Note ' . $note
                ]);
                $n->write();
            }
        }
    }
}