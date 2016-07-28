package com.greydust.ccnoxdataconverter;

import android.os.AsyncTask;
import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ServerValue;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import DataIn.battleinfoInManager;
import DataIn.booklistInManager;
import DataIn.bossinfoInManager;
import DataIn.casinoinfoInManager;
import DataIn.charainfoInManager;
import DataIn.constIn;
import DataIn.create_weapInManager;
import DataIn.episodeinfoInManager;
import DataIn.eventbadgeInManager;
import DataIn.eventplaceIn;
import DataIn.explorerinfoInManager;
import DataIn.explorerlocationInManager;
import DataIn.homelistInManager;
import DataIn.itemlistInManager;
import DataIn.motionlistInManager;
import DataIn.questdigestInManager;
import DataIn.repeatmissionlistInManager;
import DataIn.skilllistInManager;
import DataIn.subjugationexpeditioninfoIn;
import DataIn.supporterskillInManager;
import DataIn.teacherdiscipleInManager;
import DataIn.variousIn;
import DataIn.weaponcomposeInManager;
import DataIn.weaponcomposeeventInManager;
import DataIn.weaponlistInManager;
import DataIn.worldinfoInManager;
import DataOut.JsonForFirebase;
import DataOut.battle_bgOutManager;
import DataOut.booklistOutManager;
import DataOut.bosspatternOutManager;
import DataOut.bossskillOutManager;
import DataOut.casino_raceOutManager;
import DataOut.charainfoOutManager;
import DataOut.charalbOutManager;
import DataOut.charareinOutManager;
import DataOut.episodeinfoOutManager;
import DataOut.evolveOutManager;
import DataOut.explorer_infoOutManager;
import DataOut.explorer_locationOutManager;
import DataOut.high_and_lowOutManager;
import DataOut.homelistOutManager;
import DataOut.itemlistOutManager;
import DataOut.motionlistOutManager;
import DataOut.questdigestOutManager;
import DataOut.reinforceOutManager;
import DataOut.samecharaOutManager;
import DataOut.skilllistOutManager;
import DataOut.supporterskillOutManager;
import DataOut.weapon_compose_eventOutManager;
import DataOut.weaponlistOutManager;

public class MainActivity extends AppCompatActivity {

    private class ExportData extends AsyncTask<Void, Void, Void> {
        @Override
        protected Void doInBackground(Void... params) {
            File externalRoot = Environment.getExternalStorageDirectory();
            String outputDataFolder = "/mnt/shared/Other/";
            String outputDataFolderTW = "/mnt/shared/Other/TW/";
            new File("/mnt/shared/Other/TW/").mkdirs();

            {
                List<File> files = GetListFiles(new File(externalRoot.getAbsolutePath() + "/Android/data/com.sega.chainchronicle/files"));
                for (File file : files) {
                    String rawData = ReadFile(file);
                    try {
                        String convertedFileName = outputDataFolder + file.getName();
                        BufferedWriter writer = new BufferedWriter(new FileWriter(convertedFileName));
                        writer.write(rawData);
                        writer.flush();
                        writer.close();
                    } catch (IOException e) {
                    }
                }
            }
            {
                List<File> files = GetListFiles(new File(externalRoot.getAbsolutePath() + "/Android/data/net.gamon.chainchronicleTW/files"));
                for (File file : files) {
                    String rawData = ReadFile(file);
                    try {
                        String convertedFileName = outputDataFolderTW + file.getName();
                        BufferedWriter writer = new BufferedWriter(new FileWriter(convertedFileName));
                        writer.write(rawData);
                        writer.flush();
                        writer.close();
                    } catch (IOException e) {
                    }
                }
            }

            // convert Data


            return null;
        }

        protected void onPostExecute(Void result) {
            EditText text = (EditText) findViewById(R.id.editText);
            text.setText("Exported");

            (new ConvertData()).execute();
        }
    }

    private class ConvertData extends AsyncTask<Void, Void, Void> {
        private void ConvertJsonData(String prefix) {
            new File("/mnt/shared/Other/ConvertedData/" + prefix).mkdirs();
            ObjectMapper mapper = new ObjectMapper();
            mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);

            JsonForFirebase firebase = new JsonForFirebase();
            {
                {
                    try {
                        //JSON from file to Object
                        battleinfoInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "battleinfo.data5.raw"), battleinfoInManager.class);

                        {
                            battle_bgOutManager convertedData = data.Convert();
                            firebase.battle_bg = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "battleinfo.data5.converted"), convertedData);
                        }
                    } catch (Exception e) {
                    }
                }
                {
                    try
                    {
                        booklistInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "booklist.data5.raw"), booklistInManager.class);

                        {
                            booklistOutManager convertedData = data.Convert();
                            firebase.booklist = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "booklist.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }

                {
                    try
                    {
                        bossinfoInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "bossinfo.data5.raw"), bossinfoInManager.class);

                        {
                            bossskillOutManager convertedData = data.ConvertTobossskill();
                            firebase.bossskill = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "bossskill.data5.converted"), convertedData);
                        }
                        {
                            bosspatternOutManager convertedData = data.ConvertTobosspattern();
                            firebase.bosspattern = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "bosspattern.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        casinoinfoInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "casinoinfo.data5.raw"), casinoinfoInManager.class);

                        {
                            casino_raceOutManager convertedData = data.ConvertTocasino_race();
                            firebase.casino_race = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "casino_race.data5.converted"), convertedData);
                        }
                        {
                            high_and_lowOutManager convertedData = data.ConvertTohigh_and_low();
                            firebase.high_and_low = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "high_and_low.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        charainfoInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "charainfo.data5.raw"), charainfoInManager.class);

                        {
                            charainfoOutManager convertedData = data.ConvertTocharainfo();
                            firebase.charainfo = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "charainfo.data5.converted"), convertedData);
                        }
                        {
                            charalbOutManager convertedData = data.ConvertTocharalb();
                            firebase.charalb = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "charalb.data5.converted"), convertedData);
                        }
                        {
                            charareinOutManager convertedData = data.ConvertTochararein();
                            firebase.chararein = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "chararein.data5.converted"), convertedData);
                        }
                        {
                            samecharaOutManager convertedData = data.ConvertTosamechara();
                            firebase.samechara = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "samechara.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        constIn data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "const.data5.raw"), constIn.class);
                        firebase.consts = data;
                        mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "const.data5.converted"), data);
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        create_weapInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "create_weap.data5.raw"), create_weapInManager.class);
                        firebase.create_weap = data;
                        mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "create_weap.data5.converted"), data);
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        episodeinfoInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "episodeinfo.data5.raw"), episodeinfoInManager.class);

                        {
                            episodeinfoOutManager convertedData = data.Convert();
                            firebase.episodeinfo = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "episodeinfo.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        eventbadgeInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "eventbadge.data5.raw"), eventbadgeInManager.class);
                        firebase.eventbadge = data;
                        mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "eventbadge.data5.converted"), data);
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        eventplaceIn data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "eventplace.data5.raw"), eventplaceIn.class);
                        firebase.eventplace = data;
                        mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "eventplace.data5.converted"), data);
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        explorerinfoInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "explorerinfo.data5.raw"), explorerinfoInManager.class);

                        {
                            explorer_infoOutManager convertedData = data.Convert();
                            firebase.explorer_info = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "explorerinfo.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        explorerlocationInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "explorerlocation.data5.raw"), explorerlocationInManager.class);

                        {
                            explorer_locationOutManager convertedData = data.Convert();
                            firebase.explorer_location = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "explorerlocation.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        homelistInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "homelist.data5.raw"), homelistInManager.class);

                        {
                            homelistOutManager convertedData = data.Convert();
                            firebase.homelist = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "homelist.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        itemlistInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "itemlist.data5.raw"), itemlistInManager.class);

                        {
                            itemlistOutManager convertedData = data.Convert();
                            firebase.itemlist = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "itemlist.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        motionlistInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "motionlist.data5.raw"), motionlistInManager.class);

                        {
                            motionlistOutManager convertedData = data.Convert();
                            firebase.motionlist = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "motionlist.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        questdigestInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "questdigest.data5.raw"), questdigestInManager.class);

                        {
                            questdigestOutManager convertedData = data.Convert();
                            firebase.questdigest = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "questdigest.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        repeatmissionlistInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "repeatmissionlist.data5.raw"), repeatmissionlistInManager.class);
                        firebase.repeatmissionlist = data;
                        mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "repeatmissionlist.data5.converted"), data);
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        skilllistInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "skilllist.data5.raw"), skilllistInManager.class);

                        {
                            skilllistOutManager convertedData = data.Convert();
                            firebase.skilllist = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "skilllist.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        subjugationexpeditioninfoIn data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "subjugationexpeditioninfo.data5.raw"), subjugationexpeditioninfoIn.class);
                        firebase.subjugationexpeditioninfo = data;
                        mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "subjugationexpeditioninfo.data5.converted"), data);
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        supporterskillInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "supporterskill.data5.raw"), supporterskillInManager.class);

                        {
                            supporterskillOutManager convertedData = data.Convert();
                            firebase.supporterskill = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "supporterskill.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        teacherdiscipleInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "teacherdisciple.data5.raw"), teacherdiscipleInManager.class);
                        firebase.teacherdisciple = data;
                        mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "teacherdisciple.data5.converted"), data);
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        variousIn data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "various.data5.raw"), variousIn.class);
                        firebase.various = data;
                        mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "various.data5.converted"), data);
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        weaponcomposeInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "weaponcompose.data5.raw"), weaponcomposeInManager.class);
                        firebase.weaponcompose = data;
                        mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "weaponcompose.data5.converted"), data);
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        weaponcomposeeventInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "weaponcomposeevent.data5.raw"), weaponcomposeeventInManager.class);

                        {
                            weapon_compose_eventOutManager convertedData = data.Convert();
                            firebase.weapon_compose_event = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "weaponcomposeevent.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        weaponlistInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "weaponlist.data5.raw"), weaponlistInManager.class);

                        {
                            weaponlistOutManager convertedData = data.ConvertToweaponlist();
                            firebase.weaponlist = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "weaponlist.data5.converted"), convertedData);
                        }
                        {
                            evolveOutManager convertedData = data.ConvertToevolve();
                            firebase.evolve = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "evolve.data5.converted"), convertedData);
                        }
                        {
                            reinforceOutManager convertedData = data.ConvertToreinforce();
                            firebase.reinforce = convertedData;
                            mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "reinforce.data5.converted"), convertedData);
                        }
                    }
                    catch (Exception e)
                    {
                    }
                }
                {
                    try
                    {
                        worldinfoInManager data = mapper.readValue(new File("/mnt/shared/Other/" + prefix + "worldinfo.data5.raw"), worldinfoInManager.class);
                        firebase.worldinfo = data;
                        mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "worldinfo.data5.converted"), data);
                    }
                    catch (Exception e)
                    {
                    }
                }

                try {
                    mapper.writerWithDefaultPrettyPrinter().writeValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "firebase.json"), firebase);
                } catch (Exception e) {

                }
            }
        }

        @Override
        protected Void doInBackground(Void... params) {
            ConvertJsonData("");
            ConvertJsonData("TW/");

            return null;
        }

        protected void onPostExecute(Void result) {
            EditText text = (EditText) findViewById(R.id.editText);
            text.setText("Converted");

            (new UploadData()).execute();
        }
    }

    private class UploadData extends AsyncTask<Void, Void, Void> {
        private void UploadJsonData(String prefix) {
            ObjectMapper mapper = new ObjectMapper();

            FirebaseDatabase database;
            if (prefix == "TW/") {
                FirebaseOptions options = new FirebaseOptions.Builder()
                        .setApiKey("AIzaSyBnbAxZf0RBqc8fgu3lMTELBPvMVC0HE4M")
                        .setApplicationId("1:512240485651:android:08bfe55a84bcc8b8")
                        .setDatabaseUrl("https://cc-decoderbackendtw.firebaseio.com")
                        .build();
                FirebaseApp secondApp = FirebaseApp.initializeApp(getApplicationContext(), options, "TW");
                database = FirebaseDatabase.getInstance(secondApp);
            } else {
                database = FirebaseDatabase.getInstance();
            }

            try {
                Map<String, Object> data = mapper.readValue(new File("/mnt/shared/Other/ConvertedData/" + prefix + "firebase.json"), new TypeReference<Map<String,Object>>(){});
                DatabaseReference ref = database.getReference("/");
                ref.setValue(data);
            } catch (Exception e) {

            }
        }

        @Override
        protected Void doInBackground(Void... params) {
            UploadJsonData("");
            UploadJsonData("TW/");

            return null;
        }

        protected void onPostExecute(Void result) {
            EditText text = (EditText) findViewById(R.id.editText);
            text.setText("Complete");
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        (new ExportData()).execute();
    }

    protected List<File> GetListFiles(File parentDir) {
        ArrayList<File> inFiles = new ArrayList<File>();
        File[] files = parentDir.listFiles();
        for (File file : files) {
            if (file.isDirectory()) {
            } else {
                if(file.getName().endsWith(".raw")){
                    inFiles.add(file);
                }
            }
        }
        return inFiles;
    }

    protected String ReadFile(File file) {
        try {
            BufferedReader br = new BufferedReader(new FileReader(file));
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();

            while (line != null) {
                sb.append(line);
                sb.append("\n");
                line = br.readLine();
            }
            return sb.toString();
        } catch (IOException e) {
            return e.getMessage();
        }
    }
}