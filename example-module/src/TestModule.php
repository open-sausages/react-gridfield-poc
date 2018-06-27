<?php

namespace MyApp\TestModule;

use SilverStripe\Admin\GridFieldProvider;
use SilverStripe\Admin\GridFieldRegistry;
use SilverStripe\Admin\ModelAdmin;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\Form;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\OptionsetField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\View\Requirements;

class TestModule extends ModelAdmin implements GridFieldProvider
{
    private static $url_segment = 'test-module';

    private static $menu_title = 'Test Module';

    private static $managed_models = Note::class;

    private static $allowed_actions = [
        'schema'
    ];

    protected function init()
    {
        parent::init();

        Requirements::javascript('silverstripe/example-module:client/dist/styles/bundle.css');
    }

    // Just to make it look like DataObject
    public function getCMSFields()
    {
        return FieldList::create(
            OptionsetField::create('test', 'tester', [
                'yes' => 'yes',
                'no' => 'no'
            ]),
            TextareaField::create('Test', 'Test textfield'),
            Injector::inst()->get(GridFieldRegistry::class)->get('AllNotes')
        );
    }

    public function provideGridFields(GridFieldRegistry $registry)
    {
        $registry->add(
            'AllNotes',
            GridField::create(
                'ThisIsAllNotes',
                'All notes',
                Note::get()
            )
            ->addReactComponent('after', 'HelloComponent')
            ->addReactComponent('before', 'SortingComponent')
        );
    }

    public function TestForm()
    {
        $form = Form::create(
            $this,
            __FUNCTION__,
            $this->getCMSFields(),
            FieldList::create()
        );

        return $form;
    }

    public function schema($request)
    {
        $response = $this->getResponse();
        $response->addHeader('Content-Type', 'application/json');
        $schemaID = $this->getRequest()->getURL();
        return $this->getSchemaResponse($schemaID, $this->TestForm());
    }
}