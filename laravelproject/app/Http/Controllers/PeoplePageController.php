<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\PeopleInfo;
class PeoplePageController extends Controller
{
    public function getIndex()
    {

        return view('index',array('listofpeople'=>PeopleInfo::getInfo()));
    }
}
