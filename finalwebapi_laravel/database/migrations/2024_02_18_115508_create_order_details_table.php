<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id('order_id'); // Auto-incrementing primary key
            // Add relevant columns (adjust data types and constraints as needed):
            $table->date('order_date')->nullable();
            $table->string('customer_id')->nullable()->references('customer_id')->on('customers')->onDelete('cascade'); // Ensure data integrity;
            $table->decimal('total_price', 8, 2)->unsigned();
            $table->string('order_status')->default('pending'); // Allowable values: pending, processing, shipped, delivered, cancelled
            $table->timestamps(); // Created and updated timestamps
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_detail');
    }
}
