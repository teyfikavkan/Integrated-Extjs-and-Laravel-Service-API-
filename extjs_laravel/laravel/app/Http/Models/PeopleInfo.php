<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class PeopleInfo extends Model
{
    protected $table = "infopeople";

    protected $fillable = ['id','name','age'];

    protected function getInfo()
    {

        return PeopleInfo::whereRaw('id!=?',array(0))->get();
    }

}
