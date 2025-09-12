
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Brain, 
  Bot, 
  Workflow, 
  Database, 
  Memory, 
  DollarSign,
  Settings,
  Zap,
  Code,
  BarChart3,
  Network,
  Lightbulb,
  Plus,
  Mixer,
  Layers,
  Puzzle,
  GitBranch,
  Package,
  Factory
} from 'lucide-react';

export const UltimateCompositionDashboard = () => {
  const [repositories, setRepositories] = useState({
  "activepieces_pieces": {
    "hunter": {
      "name": "hunter",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hunter",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: hunter",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 36
    },
    "amazon-sqs": {
      "name": "amazon-sqs",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/amazon-sqs",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: amazon-sqs",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 23
    },
    "campaign-monitor": {
      "name": "campaign-monitor",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/campaign-monitor",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: campaign-monitor",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 32
    },
    "mailchain": {
      "name": "mailchain",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mailchain",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mailchain",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 26
    },
    "cal-com": {
      "name": "cal-com",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cal-com",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: cal-com",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 28
    },
    "attio": {
      "name": "attio",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/attio",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: attio",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 36
    },
    "webhook": {
      "name": "webhook",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webhook",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: webhook",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 37
    },
    "devin": {
      "name": "devin",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/devin",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: devin",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "drip": {
      "name": "drip",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/drip",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: drip",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 2,
      "total_files": 30
    },
    "freshdesk": {
      "name": "freshdesk",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/freshdesk",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: freshdesk",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 26
    },
    "generatebanners": {
      "name": "generatebanners",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/generatebanners",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: generatebanners",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 23
    },
    "microsoft-teams": {
      "name": "microsoft-teams",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-teams",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-teams",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 31
    },
    "fillout-forms": {
      "name": "fillout-forms",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/fillout-forms",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: fillout-forms",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 29
    },
    "moxie-crm": {
      "name": "moxie-crm",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/moxie-crm",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: moxie-crm",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 1,
      "total_files": 31
    },
    "contentful": {
      "name": "contentful",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/contentful",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: contentful",
      "piece_configs": 0,
      "actions": 18,
      "triggers": 0,
      "total_files": 42
    },
    "twin-labs": {
      "name": "twin-labs",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/twin-labs",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: twin-labs",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "microsoft-power-bi": {
      "name": "microsoft-power-bi",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-power-bi",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-power-bi",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 23
    },
    "fliqr-ai": {
      "name": "fliqr-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/fliqr-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: fliqr-ai",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 25
    },
    "dust": {
      "name": "dust",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/dust",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: dust",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 29
    },
    "google-docs": {
      "name": "google-docs",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-docs",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-docs",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 34
    },
    "tables": {
      "name": "tables",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/tables",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: tables",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 35
    },
    "webflow": {
      "name": "webflow",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webflow",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: webflow",
      "piece_configs": 0,
      "actions": 15,
      "triggers": 0,
      "total_files": 40
    },
    "twitter": {
      "name": "twitter",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/twitter",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: twitter",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 28
    },
    "baserow": {
      "name": "baserow",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/baserow",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: baserow",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 34
    },
    "crypto": {
      "name": "crypto",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/crypto",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: crypto",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 31
    },
    "monday": {
      "name": "monday",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/monday",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: monday",
      "piece_configs": 0,
      "actions": 19,
      "triggers": 0,
      "total_files": 44
    },
    "video-ai": {
      "name": "video-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/video-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: video-ai",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 21
    },
    "truelayer": {
      "name": "truelayer",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/truelayer",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: truelayer",
      "piece_configs": 0,
      "actions": 40,
      "triggers": 0,
      "total_files": 68
    },
    "hackernews": {
      "name": "hackernews",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hackernews",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: hackernews",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 23
    },
    "aminos": {
      "name": "aminos",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/aminos",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: aminos",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "woocommerce": {
      "name": "woocommerce",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/woocommerce",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: woocommerce",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 1,
      "total_files": 35
    },
    "scrapeless": {
      "name": "scrapeless",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/scrapeless",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: scrapeless",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 35
    },
    "image-ai": {
      "name": "image-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/image-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: image-ai",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "schedule": {
      "name": "schedule",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/schedule",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: schedule",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 6,
      "total_files": 32
    },
    "image-helper": {
      "name": "image-helper",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/image-helper",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: image-helper",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 31
    },
    "sendfox": {
      "name": "sendfox",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/sendfox",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: sendfox",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 29
    },
    "personal-ai": {
      "name": "personal-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/personal-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: personal-ai",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 35
    },
    "textcortex-ai": {
      "name": "textcortex-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/textcortex-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: textcortex-ai",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 31
    },
    "nocodb": {
      "name": "nocodb",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/nocodb",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: nocodb",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 33
    },
    "ghostcms": {
      "name": "ghostcms",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/ghostcms",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: ghostcms",
      "piece_configs": 0,
      "actions": 13,
      "triggers": 0,
      "total_files": 38
    },
    "bannerbear": {
      "name": "bannerbear",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/bannerbear",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: bannerbear",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "http-oauth2": {
      "name": "http-oauth2",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/http-oauth2",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: http-oauth2",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "clicksend": {
      "name": "clicksend",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/clicksend",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: clicksend",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 34
    },
    "mempool-space": {
      "name": "mempool-space",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mempool-space",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mempool-space",
      "piece_configs": 0,
      "actions": 36,
      "triggers": 0,
      "total_files": 62
    },
    "box": {
      "name": "box",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/box",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: box",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 26
    },
    "imap": {
      "name": "imap",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/imap",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: imap",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 27
    },
    "discord": {
      "name": "discord",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/discord",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: discord",
      "piece_configs": 0,
      "actions": 20,
      "triggers": 0,
      "total_files": 47
    },
    "smaily": {
      "name": "smaily",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/smaily",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: smaily",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 23
    },
    "zoho-books": {
      "name": "zoho-books",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zoho-books",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zoho-books",
      "piece_configs": 0,
      "actions": 1,
      "triggers": 0,
      "total_files": 19
    },
    "clockodo": {
      "name": "clockodo",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/clockodo",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: clockodo",
      "piece_configs": 0,
      "actions": 54,
      "triggers": 0,
      "total_files": 84
    },
    "clickfunnels": {
      "name": "clickfunnels",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/clickfunnels",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: clickfunnels",
      "piece_configs": 0,
      "actions": 18,
      "triggers": 0,
      "total_files": 38
    },
    "docusign": {
      "name": "docusign",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/docusign",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: docusign",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 25
    },
    "surrealdb": {
      "name": "surrealdb",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/surrealdb",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: surrealdb",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 25
    },
    "kizeo-forms": {
      "name": "kizeo-forms",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/kizeo-forms",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: kizeo-forms",
      "piece_configs": 0,
      "actions": 19,
      "triggers": 1,
      "total_files": 41
    },
    "close": {
      "name": "close",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/close",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: close",
      "piece_configs": 0,
      "actions": 13,
      "triggers": 0,
      "total_files": 35
    },
    "forms": {
      "name": "forms",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/forms",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: forms",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 2,
      "total_files": 28
    },
    "microsoft-sharepoint": {
      "name": "microsoft-sharepoint",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-sharepoint",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-sharepoint",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 30
    },
    "wonderchat": {
      "name": "wonderchat",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/wonderchat",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: wonderchat",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 18
    },
    "grok-xai": {
      "name": "grok-xai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/grok-xai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: grok-xai",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 29
    },
    "gitlab": {
      "name": "gitlab",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/gitlab",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: gitlab",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 28
    },
    "messagebird": {
      "name": "messagebird",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/messagebird",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: messagebird",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "webscraping-ai": {
      "name": "webscraping-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webscraping-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: webscraping-ai",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 26
    },
    "manychat": {
      "name": "manychat",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/manychat",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: manychat",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 30
    },
    "comfyicu": {
      "name": "comfyicu",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/comfyicu",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: comfyicu",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 31
    },
    "telegram-bot": {
      "name": "telegram-bot",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/telegram-bot",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: telegram-bot",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 33
    },
    "microsoft-excel-365": {
      "name": "microsoft-excel-365",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-excel-365",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-excel-365",
      "piece_configs": 0,
      "actions": 20,
      "triggers": 0,
      "total_files": 45
    },
    "wordpress": {
      "name": "wordpress",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/wordpress",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: wordpress",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 1,
      "total_files": 33
    },
    "returning-ai": {
      "name": "returning-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/returning-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: returning-ai",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 26
    },
    "mastodon": {
      "name": "mastodon",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mastodon",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mastodon",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "respond-io": {
      "name": "respond-io",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/respond-io",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: respond-io",
      "piece_configs": 0,
      "actions": 19,
      "triggers": 0,
      "total_files": 41
    },
    "bitly": {
      "name": "bitly",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/bitly",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: bitly",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 32
    },
    "tidycal": {
      "name": "tidycal",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/tidycal",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: tidycal",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 29
    },
    "framework": {
      "name": "framework",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/framework",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: framework",
      "piece_configs": 0,
      "actions": 35,
      "triggers": 1,
      "total_files": 51
    },
    "smoove": {
      "name": "smoove",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/smoove",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: smoove",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 34
    },
    "pylon": {
      "name": "pylon",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/pylon",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: pylon",
      "piece_configs": 0,
      "actions": 1,
      "triggers": 0,
      "total_files": 19
    },
    "localai": {
      "name": "localai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/localai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: localai",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 23
    },
    "microsoft-dynamics-365-business-central": {
      "name": "microsoft-dynamics-365-business-central",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-dynamics-365-business-central",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-dynamics-365-business-central",
      "piece_configs": 0,
      "actions": 33,
      "triggers": 1,
      "total_files": 56
    },
    "sendgrid": {
      "name": "sendgrid",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/sendgrid",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: sendgrid",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 29
    },
    "bamboohr": {
      "name": "bamboohr",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/bamboohr",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: bamboohr",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "backblaze": {
      "name": "backblaze",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/backblaze",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: backblaze",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 26
    },
    "bigin-by-zoho": {
      "name": "bigin-by-zoho",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/bigin-by-zoho",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: bigin-by-zoho",
      "piece_configs": 0,
      "actions": 30,
      "triggers": 0,
      "total_files": 52
    },
    "airparser": {
      "name": "airparser",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/airparser",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: airparser",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 28
    },
    "mautic": {
      "name": "mautic",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mautic",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mautic",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 34
    },
    "open-phone": {
      "name": "open-phone",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/open-phone",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: open-phone",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 32
    },
    "tarvent": {
      "name": "tarvent",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/tarvent",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: tarvent",
      "piece_configs": 0,
      "actions": 42,
      "triggers": 0,
      "total_files": 64
    },
    "placid": {
      "name": "placid",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/placid",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: placid",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 32
    },
    "smartsuite": {
      "name": "smartsuite",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/smartsuite",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: smartsuite",
      "piece_configs": 0,
      "actions": 13,
      "triggers": 0,
      "total_files": 35
    },
    "scrapegrapghai": {
      "name": "scrapegrapghai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/scrapegrapghai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: scrapegrapghai",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "apitable": {
      "name": "apitable",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/apitable",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: apitable",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 33
    },
    "captain-data": {
      "name": "captain-data",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/captain-data",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: captain-data",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "mindee": {
      "name": "mindee",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mindee",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mindee",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "fireberry": {
      "name": "fireberry",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/fireberry",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: fireberry",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 1,
      "total_files": 30
    },
    "runway": {
      "name": "runway",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/runway",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: runway",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 27
    },
    "firecrawl": {
      "name": "firecrawl",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/firecrawl",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: firecrawl",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "microsoft-onedrive": {
      "name": "microsoft-onedrive",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-onedrive",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-onedrive",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 29
    },
    "zoho-invoice": {
      "name": "zoho-invoice",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zoho-invoice",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zoho-invoice",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "date-helper": {
      "name": "date-helper",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/date-helper",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: date-helper",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 33
    },
    "activecampaign": {
      "name": "activecampaign",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/activecampaign",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: activecampaign",
      "piece_configs": 0,
      "actions": 23,
      "triggers": 0,
      "total_files": 47
    },
    "xero": {
      "name": "xero",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/xero",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: xero",
      "piece_configs": 0,
      "actions": 36,
      "triggers": 0,
      "total_files": 58
    },
    "invoiceninja": {
      "name": "invoiceninja",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/invoiceninja",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: invoiceninja",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 30
    },
    "acumbamail": {
      "name": "acumbamail",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/acumbamail",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: acumbamail",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 35
    },
    "actualbudget": {
      "name": "actualbudget",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/actualbudget",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: actualbudget",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 30
    },
    "paperform": {
      "name": "paperform",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/paperform",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: paperform",
      "piece_configs": 0,
      "actions": 20,
      "triggers": 0,
      "total_files": 42
    },
    "chatbase": {
      "name": "chatbase",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/chatbase",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: chatbase",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 28
    },
    "wealthbox": {
      "name": "wealthbox",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/wealthbox",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: wealthbox",
      "piece_configs": 0,
      "actions": 22,
      "triggers": 0,
      "total_files": 42
    },
    "village": {
      "name": "village",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/village",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: village",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 33
    },
    "microsoft-365-people": {
      "name": "microsoft-365-people",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-365-people",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-365-people",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 30
    },
    "claude": {
      "name": "claude",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/claude",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: claude",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 28
    },
    "smartsheet": {
      "name": "smartsheet",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/smartsheet",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: smartsheet",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 4,
      "total_files": 34
    },
    "lead-connector": {
      "name": "lead-connector",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/lead-connector",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: lead-connector",
      "piece_configs": 0,
      "actions": 16,
      "triggers": 0,
      "total_files": 41
    },
    "amazon-sns": {
      "name": "amazon-sns",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/amazon-sns",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: amazon-sns",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "square": {
      "name": "square",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/square",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: square",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "spotify": {
      "name": "spotify",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/spotify",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: spotify",
      "piece_configs": 0,
      "actions": 28,
      "triggers": 0,
      "total_files": 54
    },
    "copper": {
      "name": "copper",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/copper",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: copper",
      "piece_configs": 0,
      "actions": 34,
      "triggers": 0,
      "total_files": 54
    },
    "odoo": {
      "name": "odoo",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/odoo",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: odoo",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 33
    },
    "maileroo": {
      "name": "maileroo",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/maileroo",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: maileroo",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 26
    },
    "poper": {
      "name": "poper",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/poper",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: poper",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "llmrails": {
      "name": "llmrails",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/llmrails",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: llmrails",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "freshsales": {
      "name": "freshsales",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/freshsales",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: freshsales",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 23
    },
    "pipedrive": {
      "name": "pipedrive",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/pipedrive",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: pipedrive",
      "piece_configs": 0,
      "actions": 46,
      "triggers": 0,
      "total_files": 72
    },
    "datocms": {
      "name": "datocms",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/datocms",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: datocms",
      "piece_configs": 0,
      "actions": 1,
      "triggers": 0,
      "total_files": 19
    },
    "google-forms": {
      "name": "google-forms",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-forms",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-forms",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 27
    },
    "sessions-us": {
      "name": "sessions-us",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/sessions-us",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: sessions-us",
      "piece_configs": 0,
      "actions": 18,
      "triggers": 0,
      "total_files": 40
    },
    "linear": {
      "name": "linear",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/linear",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: linear",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 38
    },
    "flowlu": {
      "name": "flowlu",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/flowlu",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: flowlu",
      "piece_configs": 0,
      "actions": 17,
      "triggers": 0,
      "total_files": 41
    },
    "vtex": {
      "name": "vtex",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/vtex",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: vtex",
      "piece_configs": 0,
      "actions": 29,
      "triggers": 0,
      "total_files": 58
    },
    "mailjet": {
      "name": "mailjet",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mailjet",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mailjet",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "zoho-campaigns": {
      "name": "zoho-campaigns",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zoho-campaigns",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zoho-campaigns",
      "piece_configs": 0,
      "actions": 18,
      "triggers": 0,
      "total_files": 31
    },
    "text-ai": {
      "name": "text-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/text-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: text-ai",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 26
    },
    "segment": {
      "name": "segment",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/segment",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: segment",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "convertkit": {
      "name": "convertkit",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/convertkit",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: convertkit",
      "piece_configs": 0,
      "actions": 22,
      "triggers": 0,
      "total_files": 55
    },
    "cognito-forms": {
      "name": "cognito-forms",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cognito-forms",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: cognito-forms",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 31
    },
    "exa": {
      "name": "exa",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/exa",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: exa",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 27
    },
    "acuity-scheduling": {
      "name": "acuity-scheduling",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/acuity-scheduling",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: acuity-scheduling",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 36
    },
    "lever": {
      "name": "lever",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/lever",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: lever",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 27
    },
    "rss": {
      "name": "rss",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/rss",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: rss",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 2,
      "total_files": 31
    },
    "intercom": {
      "name": "intercom",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/intercom",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: intercom",
      "piece_configs": 0,
      "actions": 43,
      "triggers": 0,
      "total_files": 65
    },
    "autocalls": {
      "name": "autocalls",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/autocalls",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: autocalls",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 30
    },
    "peekshot": {
      "name": "peekshot",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/peekshot",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: peekshot",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 25
    },
    "softr": {
      "name": "softr",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/softr",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: softr",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 34
    },
    "zagomail": {
      "name": "zagomail",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zagomail",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zagomail",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 36
    },
    "ntfy": {
      "name": "ntfy",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/ntfy",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: ntfy",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "pdfmonkey": {
      "name": "pdfmonkey",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/pdfmonkey",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: pdfmonkey",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 30
    },
    "google-tasks": {
      "name": "google-tasks",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-tasks",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-tasks",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 31
    },
    "vtiger": {
      "name": "vtiger",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/vtiger",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: vtiger",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 33
    },
    "talkable": {
      "name": "talkable",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/talkable",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: talkable",
      "piece_configs": 0,
      "actions": 15,
      "triggers": 0,
      "total_files": 41
    },
    "cloudinary": {
      "name": "cloudinary",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cloudinary",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: cloudinary",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 33
    },
    "shopify": {
      "name": "shopify",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/shopify",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: shopify",
      "piece_configs": 0,
      "actions": 36,
      "triggers": 0,
      "total_files": 61
    },
    "deepgram": {
      "name": "deepgram",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/deepgram",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: deepgram",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 27
    },
    "groq": {
      "name": "groq",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/groq",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: groq",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 27
    },
    "clearout": {
      "name": "clearout",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/clearout",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: clearout",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "math-helper": {
      "name": "math-helper",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/math-helper",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: math-helper",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 30
    },
    "sftp": {
      "name": "sftp",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/sftp",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: sftp",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 31
    },
    "runware": {
      "name": "runware",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/runware",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: runware",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 28
    },
    "pdf": {
      "name": "pdf",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/pdf",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: pdf",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 35
    },
    "text-helper": {
      "name": "text-helper",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/text-helper",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: text-helper",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 33
    },
    "typeform": {
      "name": "typeform",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/typeform",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: typeform",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 28
    },
    "pdf-co": {
      "name": "pdf-co",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/pdf-co",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: pdf-co",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 33
    },
    "clickup": {
      "name": "clickup",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/clickup",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: clickup",
      "piece_configs": 0,
      "actions": 36,
      "triggers": 1,
      "total_files": 69
    },
    "quickbooks": {
      "name": "quickbooks",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/quickbooks",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: quickbooks",
      "piece_configs": 0,
      "actions": 13,
      "triggers": 0,
      "total_files": 34
    },
    "flow-helper": {
      "name": "flow-helper",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/flow-helper",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: flow-helper",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "dappier": {
      "name": "dappier",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/dappier",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: dappier",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 27
    },
    "common-ai": {
      "name": "common-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/common-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: common-ai",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 15
    },
    "lusha": {
      "name": "lusha",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/lusha",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: lusha",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "mailchimp": {
      "name": "mailchimp",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mailchimp",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mailchimp",
      "piece_configs": 0,
      "actions": 26,
      "triggers": 9,
      "total_files": 52
    },
    "toggl-track": {
      "name": "toggl-track",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/toggl-track",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: toggl-track",
      "piece_configs": 0,
      "actions": 23,
      "triggers": 0,
      "total_files": 43
    },
    "gravityforms": {
      "name": "gravityforms",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/gravityforms",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: gravityforms",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "ninox": {
      "name": "ninox",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/ninox",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: ninox",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 34
    },
    "chargekeep": {
      "name": "chargekeep",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/chargekeep",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: chargekeep",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 33
    },
    "frame": {
      "name": "frame",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/frame",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: frame",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 1,
      "total_files": 23
    },
    "podio": {
      "name": "podio",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/podio",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: podio",
      "piece_configs": 0,
      "actions": 20,
      "triggers": 0,
      "total_files": 42
    },
    "rabbitmq": {
      "name": "rabbitmq",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/rabbitmq",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: rabbitmq",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 28
    },
    "cody": {
      "name": "cody",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cody",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: cody",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 28
    },
    "serp-api": {
      "name": "serp-api",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/serp-api",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: serp-api",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 35
    },
    "motion": {
      "name": "motion",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/motion",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: motion",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 31
    },
    "snowflake": {
      "name": "snowflake",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/snowflake",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: snowflake",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 26
    },
    "agent": {
      "name": "agent",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/agent",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: agent",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 26
    },
    "mcp": {
      "name": "mcp",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mcp",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mcp",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 27
    },
    "systeme-io": {
      "name": "systeme-io",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/systeme-io",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: systeme-io",
      "piece_configs": 0,
      "actions": 13,
      "triggers": 0,
      "total_files": 35
    },
    "vbout": {
      "name": "vbout",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/vbout",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: vbout",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 38
    },
    "subflows": {
      "name": "subflows",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/subflows",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: subflows",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 29
    },
    "sendinblue": {
      "name": "sendinblue",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/sendinblue",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: sendinblue",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "jira-cloud": {
      "name": "jira-cloud",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/jira-cloud",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: jira-cloud",
      "piece_configs": 0,
      "actions": 22,
      "triggers": 0,
      "total_files": 48
    },
    "whatsable": {
      "name": "whatsable",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/whatsable",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: whatsable",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "totalcms": {
      "name": "totalcms",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/totalcms",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: totalcms",
      "piece_configs": 0,
      "actions": 17,
      "triggers": 0,
      "total_files": 38
    },
    "anyhook-websocket": {
      "name": "anyhook-websocket",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/anyhook-websocket",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: anyhook-websocket",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 1,
      "total_files": 25
    },
    "teamleader": {
      "name": "teamleader",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/teamleader",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: teamleader",
      "piece_configs": 0,
      "actions": 20,
      "triggers": 0,
      "total_files": 42
    },
    "youtube": {
      "name": "youtube",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/youtube",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: youtube",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 1,
      "total_files": 28
    },
    "chainalysis-api": {
      "name": "chainalysis-api",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/chainalysis-api",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: chainalysis-api",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "soap": {
      "name": "soap",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/soap",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: soap",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "crisp": {
      "name": "crisp",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/crisp",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: crisp",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 34
    },
    "deepseek": {
      "name": "deepseek",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/deepseek",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: deepseek",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 27
    },
    "help-scout": {
      "name": "help-scout",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/help-scout",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: help-scout",
      "piece_configs": 0,
      "actions": 16,
      "triggers": 0,
      "total_files": 38
    },
    "checkout": {
      "name": "checkout",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/checkout",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: checkout",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 33
    },
    "saleor": {
      "name": "saleor",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/saleor",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: saleor",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "certopus": {
      "name": "certopus",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/certopus",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: certopus",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 30
    },
    "facebook-leads": {
      "name": "facebook-leads",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/facebook-leads",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: facebook-leads",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 28
    },
    "bubble": {
      "name": "bubble",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/bubble",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: bubble",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 28
    },
    "mongodb": {
      "name": "mongodb",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mongodb",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mongodb",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 32
    },
    "mixpanel": {
      "name": "mixpanel",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mixpanel",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mixpanel",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "xml": {
      "name": "xml",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/xml",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: xml",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "qrcode": {
      "name": "qrcode",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/qrcode",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: qrcode",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 26
    },
    "notion": {
      "name": "notion",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/notion",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: notion",
      "piece_configs": 0,
      "actions": 20,
      "triggers": 0,
      "total_files": 45
    },
    "elevenlabs": {
      "name": "elevenlabs",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/elevenlabs",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: elevenlabs",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 26
    },
    "pastebin": {
      "name": "pastebin",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/pastebin",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: pastebin",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 27
    },
    "supabase": {
      "name": "supabase",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/supabase",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: supabase",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 34
    },
    "zoho-crm": {
      "name": "zoho-crm",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zoho-crm",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zoho-crm",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "azure-openai": {
      "name": "azure-openai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/azure-openai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: azure-openai",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 25
    },
    "instasent": {
      "name": "instasent",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/instasent",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: instasent",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 27
    },
    "google-calendar": {
      "name": "google-calendar",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-calendar",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-calendar",
      "piece_configs": 0,
      "actions": 19,
      "triggers": 0,
      "total_files": 46
    },
    "zuora": {
      "name": "zuora",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zuora",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zuora",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 27
    },
    "afforai": {
      "name": "afforai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/afforai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: afforai",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "tags": {
      "name": "tags",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/tags",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: tags",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 24
    },
    "brilliant-directories": {
      "name": "brilliant-directories",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/brilliant-directories",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: brilliant-directories",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "retable": {
      "name": "retable",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/retable",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: retable",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 33
    },
    "hubspot": {
      "name": "hubspot",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hubspot",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: hubspot",
      "piece_configs": 0,
      "actions": 72,
      "triggers": 0,
      "total_files": 99
    },
    "pushover": {
      "name": "pushover",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/pushover",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: pushover",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "harvest": {
      "name": "harvest",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/harvest",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: harvest",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 33
    },
    "wufoo": {
      "name": "wufoo",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/wufoo",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: wufoo",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 31
    },
    "netlify": {
      "name": "netlify",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/netlify",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: netlify",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 30
    },
    "microsoft-outlook-calendar": {
      "name": "microsoft-outlook-calendar",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-outlook-calendar",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-outlook-calendar",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 26
    },
    "pinecone": {
      "name": "pinecone",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/pinecone",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: pinecone",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 29
    },
    "airtable": {
      "name": "airtable",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/airtable",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: airtable",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 2,
      "total_files": 35
    },
    "serpstat": {
      "name": "serpstat",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/serpstat",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: serpstat",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 26
    },
    "heartbeat": {
      "name": "heartbeat",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/heartbeat",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: heartbeat",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "tally": {
      "name": "tally",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/tally",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: tally",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "todoist": {
      "name": "todoist",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/todoist",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: todoist",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 1,
      "total_files": 37
    },
    "connections": {
      "name": "connections",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/connections",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: connections",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "robolly": {
      "name": "robolly",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/robolly",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: robolly",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "common": {
      "name": "common",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/common",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: common",
      "piece_configs": 0,
      "actions": 20,
      "triggers": 0,
      "total_files": 35
    },
    "azure-communication-services": {
      "name": "azure-communication-services",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/azure-communication-services",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: azure-communication-services",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "aianswer": {
      "name": "aianswer",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/aianswer",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: aianswer",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 28
    },
    "scenario": {
      "name": "scenario",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/scenario",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: scenario",
      "piece_configs": 0,
      "actions": 1,
      "triggers": 0,
      "total_files": 19
    },
    "linka": {
      "name": "linka",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/linka",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: linka",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 33
    },
    "postgres": {
      "name": "postgres",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/postgres",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: postgres",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 28
    },
    "perplexity-ai": {
      "name": "perplexity-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/perplexity-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: perplexity-ai",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "jina-ai": {
      "name": "jina-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/jina-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: jina-ai",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 29
    },
    "blockscout": {
      "name": "blockscout",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/blockscout",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: blockscout",
      "piece_configs": 0,
      "actions": 43,
      "triggers": 0,
      "total_files": 69
    },
    "cloudconvert": {
      "name": "cloudconvert",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cloudconvert",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: cloudconvert",
      "piece_configs": 0,
      "actions": 15,
      "triggers": 0,
      "total_files": 35
    },
    "onfleet": {
      "name": "onfleet",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/onfleet",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: onfleet",
      "piece_configs": 0,
      "actions": 52,
      "triggers": 0,
      "total_files": 74
    },
    "dimo": {
      "name": "dimo",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/dimo",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: dimo",
      "piece_configs": 0,
      "actions": 40,
      "triggers": 9,
      "total_files": 77
    },
    "json": {
      "name": "json",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/json",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: json",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 26
    },
    "wedof": {
      "name": "wedof",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/wedof",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: wedof",
      "piece_configs": 0,
      "actions": 75,
      "triggers": 0,
      "total_files": 107
    },
    "gistly": {
      "name": "gistly",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/gistly",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: gistly",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 22
    },
    "zoo": {
      "name": "zoo",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zoo",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zoo",
      "piece_configs": 0,
      "actions": 94,
      "triggers": 0,
      "total_files": 126
    },
    "github": {
      "name": "github",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/github",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: github",
      "piece_configs": 0,
      "actions": 25,
      "triggers": 1,
      "total_files": 51
    },
    "stable-diffusion-webui": {
      "name": "stable-diffusion-webui",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/stable-diffusion-webui",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: stable-diffusion-webui",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "google-gemini": {
      "name": "google-gemini",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-gemini",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-gemini",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 29
    },
    "figma": {
      "name": "figma",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/figma",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: figma",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 31
    },
    "open-router": {
      "name": "open-router",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/open-router",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: open-router",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 27
    },
    "apollo": {
      "name": "apollo",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/apollo",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: apollo",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 23
    },
    "google-sheets": {
      "name": "google-sheets",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-sheets",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-sheets",
      "piece_configs": 0,
      "actions": 24,
      "triggers": 1,
      "total_files": 59
    },
    "seven": {
      "name": "seven",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/seven",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: seven",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 27
    },
    "line": {
      "name": "line",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/line",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: line",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 27
    },
    "jotform": {
      "name": "jotform",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/jotform",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: jotform",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "zendesk": {
      "name": "zendesk",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zendesk",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zendesk",
      "piece_configs": 0,
      "actions": 21,
      "triggers": 0,
      "total_files": 43
    },
    "instagram-business": {
      "name": "instagram-business",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/instagram-business",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: instagram-business",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 28
    },
    "copy-ai": {
      "name": "copy-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/copy-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: copy-ai",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 28
    },
    "cartloom": {
      "name": "cartloom",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cartloom",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: cartloom",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 31
    },
    "http": {
      "name": "http",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/http",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: http",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 28
    },
    "heygen": {
      "name": "heygen",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/heygen",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: heygen",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 34
    },
    "google-drive": {
      "name": "google-drive",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-drive",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-drive",
      "piece_configs": 0,
      "actions": 20,
      "triggers": 0,
      "total_files": 46
    },
    "graphql": {
      "name": "graphql",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/graphql",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: graphql",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "kommo": {
      "name": "kommo",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/kommo",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: kommo",
      "piece_configs": 0,
      "actions": 16,
      "triggers": 0,
      "total_files": 38
    },
    "csv": {
      "name": "csv",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/csv",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: csv",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 27
    },
    "lemlist": {
      "name": "lemlist",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/lemlist",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: lemlist",
      "piece_configs": 0,
      "actions": 18,
      "triggers": 0,
      "total_files": 38
    },
    "apitemplate-io": {
      "name": "apitemplate-io",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/apitemplate-io",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: apitemplate-io",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 32
    },
    "smtp": {
      "name": "smtp",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/smtp",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: smtp",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 28
    },
    "straico": {
      "name": "straico",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/straico",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: straico",
      "piece_configs": 0,
      "actions": 19,
      "triggers": 0,
      "total_files": 43
    },
    "gcloud-pubsub": {
      "name": "gcloud-pubsub",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/gcloud-pubsub",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: gcloud-pubsub",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 27
    },
    "utility-ai": {
      "name": "utility-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/utility-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: utility-ai",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 27
    },
    "data-mapper": {
      "name": "data-mapper",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/data-mapper",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: data-mapper",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "browserless": {
      "name": "browserless",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/browserless",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: browserless",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 27
    },
    "mollie": {
      "name": "mollie",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mollie",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mollie",
      "piece_configs": 0,
      "actions": 17,
      "triggers": 0,
      "total_files": 37
    },
    "mysql": {
      "name": "mysql",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mysql",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mysql",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 33
    },
    "bluesky": {
      "name": "bluesky",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/bluesky",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: bluesky",
      "piece_configs": 0,
      "actions": 13,
      "triggers": 0,
      "total_files": 35
    },
    "zoho-mail": {
      "name": "zoho-mail",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zoho-mail",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zoho-mail",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 1,
      "total_files": 32
    },
    "retell-ai": {
      "name": "retell-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/retell-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: retell-ai",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 31
    },
    "cloutly": {
      "name": "cloutly",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cloutly",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: cloutly",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "mailer-lite": {
      "name": "mailer-lite",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mailer-lite",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mailer-lite",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 1,
      "total_files": 33
    },
    "call-rounded": {
      "name": "call-rounded",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/call-rounded",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: call-rounded",
      "piece_configs": 0,
      "actions": 1,
      "triggers": 0,
      "total_files": 19
    },
    "reddit": {
      "name": "reddit",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/reddit",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: reddit",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 30
    },
    "supadata": {
      "name": "supadata",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/supadata",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: supadata",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 22
    },
    "amazon-ses": {
      "name": "amazon-ses",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/amazon-ses",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: amazon-ses",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 20
    },
    "confluence": {
      "name": "confluence",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/confluence",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: confluence",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 28
    },
    "hugging-face": {
      "name": "hugging-face",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/hugging-face",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: hugging-face",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 28
    },
    "assemblyai": {
      "name": "assemblyai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/assemblyai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: assemblyai",
      "piece_configs": 0,
      "actions": 27,
      "triggers": 0,
      "total_files": 59
    },
    "kallabot-ai": {
      "name": "kallabot-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/kallabot-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: kallabot-ai",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 31
    },
    "eden-ai": {
      "name": "eden-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/eden-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: eden-ai",
      "piece_configs": 0,
      "actions": 16,
      "triggers": 0,
      "total_files": 37
    },
    "docsbot": {
      "name": "docsbot",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/docsbot",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: docsbot",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 29
    },
    "ticktick": {
      "name": "ticktick",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/ticktick",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: ticktick",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 34
    },
    "deepl": {
      "name": "deepl",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/deepl",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: deepl",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "qdrant": {
      "name": "qdrant",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/qdrant",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: qdrant",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 30
    },
    "queue": {
      "name": "queue",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/queue",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: queue",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 25
    },
    "assembled": {
      "name": "assembled",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/assembled",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: assembled",
      "piece_configs": 0,
      "actions": 13,
      "triggers": 0,
      "total_files": 34
    },
    "retune": {
      "name": "retune",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/retune",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: retune",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "googlechat": {
      "name": "googlechat",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/googlechat",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: googlechat",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 34
    },
    "discourse": {
      "name": "discourse",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/discourse",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: discourse",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 26
    },
    "zoom": {
      "name": "zoom",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zoom",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zoom",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 27
    },
    "pandadoc": {
      "name": "pandadoc",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/pandadoc",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: pandadoc",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 36
    },
    "flowise": {
      "name": "flowise",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/flowise",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: flowise",
      "piece_configs": 0,
      "actions": 1,
      "triggers": 0,
      "total_files": 20
    },
    "dropbox": {
      "name": "dropbox",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/dropbox",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: dropbox",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 38
    },
    "murf-api": {
      "name": "murf-api",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/murf-api",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: murf-api",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 27
    },
    "amazon-s3": {
      "name": "amazon-s3",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/amazon-s3",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: amazon-s3",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 33
    },
    "anyhook-graphql": {
      "name": "anyhook-graphql",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/anyhook-graphql",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: anyhook-graphql",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 1,
      "total_files": 25
    },
    "microsoft-dynamics-crm": {
      "name": "microsoft-dynamics-crm",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-dynamics-crm",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-dynamics-crm",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 30
    },
    "saastic": {
      "name": "saastic",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/saastic",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: saastic",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 25
    },
    "gotify": {
      "name": "gotify",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/gotify",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: gotify",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "microsoft-todo": {
      "name": "microsoft-todo",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-todo",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-todo",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 32
    },
    "bonjoro": {
      "name": "bonjoro",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/bonjoro",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: bonjoro",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 25
    },
    "salesforce": {
      "name": "salesforce",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/salesforce",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: salesforce",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 34
    },
    "ashby": {
      "name": "ashby",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/ashby",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: ashby",
      "piece_configs": 0,
      "actions": 1,
      "triggers": 0,
      "total_files": 19
    },
    "file-helper": {
      "name": "file-helper",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/file-helper",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: file-helper",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 34
    },
    "circle": {
      "name": "circle",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/circle",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: circle",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 34
    },
    "slack": {
      "name": "slack",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/slack",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: slack",
      "piece_configs": 0,
      "actions": 40,
      "triggers": 0,
      "total_files": 65
    },
    "formbricks": {
      "name": "formbricks",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/formbricks",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: formbricks",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 23
    },
    "pastefy": {
      "name": "pastefy",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/pastefy",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: pastefy",
      "piece_configs": 0,
      "actions": 18,
      "triggers": 0,
      "total_files": 41
    },
    "simpliroute": {
      "name": "simpliroute",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/simpliroute",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: simpliroute",
      "piece_configs": 0,
      "actions": 36,
      "triggers": 0,
      "total_files": 63
    },
    "avoma": {
      "name": "avoma",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/avoma",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: avoma",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 31
    },
    "data-summarizer": {
      "name": "data-summarizer",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/data-summarizer",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: data-summarizer",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 26
    },
    "mattermost": {
      "name": "mattermost",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mattermost",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mattermost",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "zoho-desk": {
      "name": "zoho-desk",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zoho-desk",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zoho-desk",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 28
    },
    "posthog": {
      "name": "posthog",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/posthog",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: posthog",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 26
    },
    "metabase": {
      "name": "metabase",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/metabase",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: metabase",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 28
    },
    "bika": {
      "name": "bika",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/bika",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: bika",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 33
    },
    "predict-leads": {
      "name": "predict-leads",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/predict-leads",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: predict-leads",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 27
    },
    "razorpay": {
      "name": "razorpay",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/razorpay",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: razorpay",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "google-slides": {
      "name": "google-slides",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-slides",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-slides",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 26
    },
    "contiguity": {
      "name": "contiguity",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/contiguity",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: contiguity",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "customer-io": {
      "name": "customer-io",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/customer-io",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: customer-io",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "trello": {
      "name": "trello",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/trello",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: trello",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 35
    },
    "surveymonkey": {
      "name": "surveymonkey",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/surveymonkey",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: surveymonkey",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "reoon-verifier": {
      "name": "reoon-verifier",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/reoon-verifier",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: reoon-verifier",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 29
    },
    "grist": {
      "name": "grist",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/grist",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: grist",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 2,
      "total_files": 32
    },
    "google-my-business": {
      "name": "google-my-business",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-my-business",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-my-business",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 29
    },
    "todos": {
      "name": "todos",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/todos",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: todos",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 29
    },
    "clockify": {
      "name": "clockify",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/clockify",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: clockify",
      "piece_configs": 0,
      "actions": 13,
      "triggers": 0,
      "total_files": 35
    },
    "constant-contact": {
      "name": "constant-contact",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/constant-contact",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: constant-contact",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "tavily": {
      "name": "tavily",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/tavily",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: tavily",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 23
    },
    "facebook-pages": {
      "name": "facebook-pages",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/facebook-pages",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: facebook-pages",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 29
    },
    "beehiiv": {
      "name": "beehiiv",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/beehiiv",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: beehiiv",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 3,
      "total_files": 34
    },
    "sendy": {
      "name": "sendy",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/sendy",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: sendy",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 34
    },
    "dittofeed": {
      "name": "dittofeed",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/dittofeed",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: dittofeed",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 22
    },
    "simplepdf": {
      "name": "simplepdf",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/simplepdf",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: simplepdf",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "gameball": {
      "name": "gameball",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/gameball",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: gameball",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "nifty": {
      "name": "nifty",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/nifty",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: nifty",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "wootric": {
      "name": "wootric",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/wootric",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: wootric",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "krisp-call": {
      "name": "krisp-call",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/krisp-call",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: krisp-call",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 27
    },
    "calendly": {
      "name": "calendly",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/calendly",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: calendly",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 2,
      "total_files": 29
    },
    "clarifai": {
      "name": "clarifai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/clarifai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: clarifai",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 31
    },
    "medullar": {
      "name": "medullar",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/medullar",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: medullar",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 29
    },
    "eth-name-service": {
      "name": "eth-name-service",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/eth-name-service",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: eth-name-service",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 24
    },
    "fireflies-ai": {
      "name": "fireflies-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/fireflies-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: fireflies-ai",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 31
    },
    "sperse": {
      "name": "sperse",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/sperse",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: sperse",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 33
    },
    "delay": {
      "name": "delay",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/delay",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: delay",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 27
    },
    "mistral-ai": {
      "name": "mistral-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mistral-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mistral-ai",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 28
    },
    "respaid": {
      "name": "respaid",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/respaid",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: respaid",
      "piece_configs": 0,
      "actions": 18,
      "triggers": 0,
      "total_files": 40
    },
    "formstack": {
      "name": "formstack",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/formstack",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: formstack",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 32
    },
    "short-io": {
      "name": "short-io",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/short-io",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: short-io",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 36
    },
    "netsuite": {
      "name": "netsuite",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/netsuite",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: netsuite",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "missive": {
      "name": "missive",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/missive",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: missive",
      "piece_configs": 0,
      "actions": 14,
      "triggers": 0,
      "total_files": 36
    },
    "cometapi": {
      "name": "cometapi",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/cometapi",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: cometapi",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 23
    },
    "thankster": {
      "name": "thankster",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/thankster",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: thankster",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "zerobounce": {
      "name": "zerobounce",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/zerobounce",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: zerobounce",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "beamer": {
      "name": "beamer",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/beamer",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: beamer",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 29
    },
    "airtop": {
      "name": "airtop",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/airtop",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: airtop",
      "piece_configs": 0,
      "actions": 15,
      "triggers": 0,
      "total_files": 36
    },
    "upgradechat": {
      "name": "upgradechat",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/upgradechat",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: upgradechat",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 33
    },
    "kimai": {
      "name": "kimai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/kimai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: kimai",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 25
    },
    "matrix": {
      "name": "matrix",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/matrix",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: matrix",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 25
    },
    "sendpulse": {
      "name": "sendpulse",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/sendpulse",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: sendpulse",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 34
    },
    "asana": {
      "name": "asana",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/asana",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: asana",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 27
    },
    "coda": {
      "name": "coda",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/coda",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: coda",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 33
    },
    "reachinbox": {
      "name": "reachinbox",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/reachinbox",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: reachinbox",
      "piece_configs": 0,
      "actions": 21,
      "triggers": 0,
      "total_files": 43
    },
    "google-search-console": {
      "name": "google-search-console",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-search-console",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-search-console",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 30
    },
    "webling": {
      "name": "webling",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/webling",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: webling",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 29
    },
    "apify": {
      "name": "apify",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/apify",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: apify",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 25
    },
    "aircall": {
      "name": "aircall",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/aircall",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: aircall",
      "piece_configs": 0,
      "actions": 16,
      "triggers": 0,
      "total_files": 38
    },
    "gmail": {
      "name": "gmail",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/gmail",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: gmail",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 36
    },
    "quickzu": {
      "name": "quickzu",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/quickzu",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: quickzu",
      "piece_configs": 0,
      "actions": 21,
      "triggers": 0,
      "total_files": 48
    },
    "taskade": {
      "name": "taskade",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/taskade",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: taskade",
      "piece_configs": 0,
      "actions": 7,
      "triggers": 0,
      "total_files": 28
    },
    "agentx": {
      "name": "agentx",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/agentx",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: agentx",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 31
    },
    "whatsapp": {
      "name": "whatsapp",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/whatsapp",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: whatsapp",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 29
    },
    "knack": {
      "name": "knack",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/knack",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: knack",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 29
    },
    "bettermode": {
      "name": "bettermode",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/bettermode",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: bettermode",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 28
    },
    "dumpling-ai": {
      "name": "dumpling-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/dumpling-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: dumpling-ai",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 28
    },
    "resend": {
      "name": "resend",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/resend",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: resend",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "skyvern": {
      "name": "skyvern",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/skyvern",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: skyvern",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 30
    },
    "google-contacts": {
      "name": "google-contacts",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/google-contacts",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: google-contacts",
      "piece_configs": 0,
      "actions": 6,
      "triggers": 0,
      "total_files": 32
    },
    "openai": {
      "name": "openai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/openai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: openai",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 36
    },
    "microsoft-onenote": {
      "name": "microsoft-onenote",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-onenote",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-onenote",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 31
    },
    "microsoft-outlook": {
      "name": "microsoft-outlook",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/microsoft-outlook",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: microsoft-outlook",
      "piece_configs": 0,
      "actions": 16,
      "triggers": 0,
      "total_files": 38
    },
    "browse-ai": {
      "name": "browse-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/browse-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: browse-ai",
      "piece_configs": 0,
      "actions": 9,
      "triggers": 0,
      "total_files": 31
    },
    "linkedin": {
      "name": "linkedin",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/linkedin",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: linkedin",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 28
    },
    "mem": {
      "name": "mem",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/mem",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: mem",
      "piece_configs": 0,
      "actions": 5,
      "triggers": 0,
      "total_files": 26
    },
    "activepieces": {
      "name": "activepieces",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/activepieces",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: activepieces",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "matomo": {
      "name": "matomo",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/matomo",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: matomo",
      "piece_configs": 0,
      "actions": 4,
      "triggers": 0,
      "total_files": 24
    },
    "stability-ai": {
      "name": "stability-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/stability-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: stability-ai",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 25
    },
    "approval": {
      "name": "approval",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/approval",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: approval",
      "piece_configs": 0,
      "actions": 3,
      "triggers": 0,
      "total_files": 23
    },
    "twilio": {
      "name": "twilio",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/twilio",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: twilio",
      "piece_configs": 0,
      "actions": 12,
      "triggers": 0,
      "total_files": 38
    },
    "store": {
      "name": "store",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/store",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: store",
      "piece_configs": 0,
      "actions": 8,
      "triggers": 0,
      "total_files": 41
    },
    "stripe": {
      "name": "stripe",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/stripe",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: stripe",
      "piece_configs": 0,
      "actions": 11,
      "triggers": 0,
      "total_files": 37
    },
    "binance": {
      "name": "binance",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/binance",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: binance",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    },
    "instantly-ai": {
      "name": "instantly-ai",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/instantly-ai",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: instantly-ai",
      "piece_configs": 0,
      "actions": 10,
      "triggers": 0,
      "total_files": 32
    },
    "photoroom": {
      "name": "photoroom",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-ecosystem/activepieces/packages/pieces/community/photoroom",
      "type": "activepieces_piece",
      "status": "available",
      "description": "Activepieces piece: photoroom",
      "piece_configs": 0,
      "actions": 2,
      "triggers": 0,
      "total_files": 22
    }
  },
  "activepieces_templates": {},
  "claude_templates": {},
  "claude_agents": {},
  "iza_business_models": {
    "bm001_resume_builder": {
      "name": "bm001_resume_builder",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/business_models/templates/bm001_resume_builder.py",
      "type": "iza_business_model",
      "status": "available",
      "description": "BM001 - AI-Powered Resume Builder & ATS Optimizer",
      "revenue_potential": "High ($100K-$450K monthly)",
      "ai_capabilities": [
        "OpenAI Integration",
        "Vector Search",
        "AI Processing",
        "MCP Server"
      ]
    },
    "bm003_local_seo_service": {
      "name": "bm003_local_seo_service",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/business_models/templates/bm003_local_seo_service.py",
      "type": "iza_business_model",
      "status": "available",
      "description": "BM003 - AI Local Business SEO Service",
      "revenue_potential": "High Revenue Potential",
      "ai_capabilities": [
        "AI Processing",
        "MCP Server"
      ]
    },
    "bm002_etsy_print_on_demand": {
      "name": "bm002_etsy_print_on_demand",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/business_models/templates/bm002_etsy_print_on_demand.py",
      "type": "iza_business_model",
      "status": "available",
      "description": "BM002 - AI-Generated Etsy/Print-On-Demand Store",
      "revenue_potential": "High Revenue Potential",
      "ai_capabilities": [
        "AI Processing",
        "MCP Server"
      ]
    },
    "bm005_youtube_channel_factory": {
      "name": "bm005_youtube_channel_factory",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/business_models/templates/bm005_youtube_channel_factory.py",
      "type": "iza_business_model",
      "status": "available",
      "description": "BM005 - AI-Generated YouTube Channel Factory",
      "revenue_potential": "High Revenue Potential",
      "ai_capabilities": [
        "OpenAI Integration",
        "AI Processing",
        "MCP Server"
      ]
    },
    "bm004_fitness_meal_coach": {
      "name": "bm004_fitness_meal_coach",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/business_models/templates/bm004_fitness_meal_coach.py",
      "type": "iza_business_model",
      "status": "available",
      "description": "BM004 - AI Fitness & Meal Planning Coach",
      "revenue_potential": "High Revenue Potential",
      "ai_capabilities": [
        "Vector Search",
        "AI Processing",
        "MCP Server"
      ]
    }
  },
  "iza_workflows": {
    "workflow_engine": {
      "name": "workflow_engine",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/workflows/core/workflow_engine.py",
      "type": "iza_workflow",
      "status": "available",
      "description": "IZA OS workflow: workflow_engine",
      "capabilities": [
        "Workflow Management",
        "System Orchestration",
        "Optimization",
        "AI Intelligence"
      ]
    }
  },
  "iza_mcp_servers": {
    "llm-core": {
      "name": "llm-core",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-core/40-mcp-agents/mcp-servers/llm-core",
      "type": "iza_mcp_server",
      "status": "available",
      "description": "IZA OS MCP server: llm-core",
      "files": []
    }
  },
  "iza_memory_systems": {
    "__init__": {
      "name": "__init__",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/memu/__init__.py",
      "type": "iza_memory_system",
      "status": "available",
      "description": "IZA OS memory system: __init__",
      "features": []
    }
  },
  "iza_knowledge_graphs": {
    "README": {
      "name": "README",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/src/knowledge/strategic-execution/README.md",
      "type": "iza_knowledge_graph",
      "status": "available",
      "description": "IZA OS knowledge graph: README",
      "content_length": 5720
    },
    "STRATEGIC_INTEGRATION_INDEX": {
      "name": "STRATEGIC_INTEGRATION_INDEX",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/src/knowledge/strategic-execution/STRATEGIC_INTEGRATION_INDEX.md",
      "type": "iza_knowledge_graph",
      "status": "available",
      "description": "IZA OS knowledge graph: STRATEGIC_INTEGRATION_INDEX",
      "content_length": 11423
    },
    "phase-1-foundation": {
      "name": "phase-1-foundation",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/src/knowledge/strategic-execution/execution-blueprints/phase-1-foundation.md",
      "type": "iza_knowledge_graph",
      "status": "available",
      "description": "IZA OS knowledge graph: phase-1-foundation",
      "content_length": 9454
    },
    "mindset-principles": {
      "name": "mindset-principles",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/src/knowledge/strategic-execution/championship-framework/mindset-principles.md",
      "type": "iza_knowledge_graph",
      "status": "available",
      "description": "IZA OS knowledge graph: mindset-principles",
      "content_length": 5684
    },
    "human-operating-system": {
      "name": "human-operating-system",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/iza-os-specs/iza-os-production/src/knowledge/strategic-execution/operating-matrices/human-operating-system.md",
      "type": "iza_knowledge_graph",
      "status": "available",
      "description": "IZA OS knowledge graph: human-operating-system",
      "content_length": 8920
    }
  },
  "external_repos": {},
  "templates": {},
  "workflows": {},
  "agents": {},
  "business_models": {},
  "n8n_workflows": {
    "schema-org-json-generation": {
      "name": "schema-org-json-generation",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/n8n-workflows/automation/schema-org-json-generation.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: schema-org-json-generation",
      "nodes": 8,
      "connections": 7
    },
    "content-monetization-hub-creation": {
      "name": "content-monetization-hub-creation",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/n8n-workflows/ventures/content-monetization-hub-creation.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: content-monetization-hub-creation",
      "nodes": 8,
      "connections": 6
    },
    "ai-automation-studio-lead-generation": {
      "name": "ai-automation-studio-lead-generation",
      "path": "/Users/divinejohns/memU/iza-os-ecosystem-workspace/n8n-workflows/ventures/ai-automation-studio-lead-generation.json",
      "type": "n8n_workflow",
      "status": "available",
      "description": "n8n workflow: ai-automation-studio-lead-generation",
      "nodes": 6,
      "connections": 4
    }
  },
  "openlovable": {},
  "dify": {},
  "autogen": {}
});
  const [categories, setCategories] = useState({
  "activepieces_pieces": 404,
  "activepieces_templates": 0,
  "claude_templates": 0,
  "claude_agents": 0,
  "iza_business_models": 5,
  "iza_workflows": 1,
  "iza_mcp_servers": 1,
  "iza_memory_systems": 1,
  "iza_knowledge_graphs": 5,
  "external_repos": 0,
  "templates": 0,
  "workflows": 0,
  "agents": 0,
  "business_models": 0,
  "n8n_workflows": 3,
  "openlovable": 0,
  "dify": 0,
  "autogen": 0
});
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [compositionName, setCompositionName] = useState('');
  const [compositionDescription, setCompositionDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [createdComposition, setCreatedComposition] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addComponentToComposition = (component) => {
    setSelectedComponents(prev => [...prev, component]);
  };

  const removeComponentFromComposition = (componentId) => {
    setSelectedComponents(prev => prev.filter(comp => comp.id !== componentId));
  };

  const createComposition = async () => {
    setIsCreating(true);
    try {
      const response = await fetch('/api/create-composition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: compositionName,
          description: compositionDescription,
          components: selectedComponents,
          optimizationLevel: 'supreme'
        })
      });
      
      const result = await response.json();
      setCreatedComposition(result);
    } catch (error) {
      console.error('Error creating composition:', error);
    } finally {
      setIsCreating(false);
    }
  };

  const ComponentCard = { category, components } => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          {category.replace('_', ' ').toUpperCase()} ({Object.keys(components).length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 max-h-96 overflow-y-auto">
          {Object.entries(components).slice(0, 20).map(([name, component]) => (
            <div key={name} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <div className="flex-1">
                <h4 className="font-medium">{component.name}</h4>
                <p className="text-sm text-gray-600">{component.description}</p>
                {component.capabilities && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {component.capabilities.map((cap, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{cap}</Badge>
                    ))}
                  </div>
                )}
                {component.total_files && (
                  <Badge variant="secondary" className="text-xs mt-1">
                    {component.total_files} files
                  </Badge>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => addComponentToComposition({
                    id: `${category}-${name}`,
                    category,
                    name: component.name,
                    description: component.description,
                    path: component.path,
                    type: component.type,
                    capabilities: component.capabilities || []
                  })}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(component.path, '_blank')}
                >
                  <Code className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          {Object.keys(components).length > 20 && (
            <div className="text-center text-sm text-gray-500">
              ... and {Object.keys(components).length - 20} more components
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎨 IZA OS Ultimate Composition Engine
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Mix and match components from ALL repositories to create custom solutions
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <Factory className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">{categories.activepieces_pieces || 0}</div>
              <div className="text-sm text-gray-600">Activepieces Pieces</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Brain className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{categories.claude_templates || 0}</div>
              <div className="text-sm text-gray-600">Claude Templates</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Bot className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold">{categories.claude_agents || 0}</div>
              <div className="text-sm text-gray-600">Claude Agents</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Workflow className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold">{categories.iza_workflows || 0}</div>
              <div className="text-sm text-gray-600">IZA Workflows</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{categories.iza_business_models || 0}</div>
              <div className="text-sm text-gray-600">Business Models</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Network className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold">{selectedComponents.length}</div>
              <div className="text-sm text-gray-600">Selected</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mixer className="h-5 w-5" />
                  Component Selection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input
                    placeholder="Search components..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <Tabs defaultValue="activepieces" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="activepieces" className="flex items-center gap-2">
                      <Factory className="h-4 w-4" />
                      Activepieces
                    </TabsTrigger>
                    <TabsTrigger value="claude" className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Claude
                    </TabsTrigger>
                    <TabsTrigger value="iza" className="flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      IZA OS
                    </TabsTrigger>
                    <TabsTrigger value="external" className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4" />
                      External
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="activepieces">
                    <ComponentCard category="activepieces_pieces" components={repositories.activepieces_pieces || {}} />
                  </TabsContent>

                  <TabsContent value="claude">
                    <div className="space-y-4">
                      <ComponentCard category="claude_templates" components={repositories.claude_templates || {}} />
                      <ComponentCard category="claude_agents" components={repositories.claude_agents || {}} />
                    </div>
                  </TabsContent>

                  <TabsContent value="iza">
                    <div className="space-y-4">
                      <ComponentCard category="iza_business_models" components={repositories.iza_business_models || {}} />
                      <ComponentCard category="iza_workflows" components={repositories.iza_workflows || {}} />
                      <ComponentCard category="iza_mcp_servers" components={repositories.iza_mcp_servers || {}} />
                      <ComponentCard category="iza_memory_systems" components={repositories.iza_memory_systems || {}} />
                      <ComponentCard category="iza_knowledge_graphs" components={repositories.iza_knowledge_graphs || {}} />
                    </div>
                  </TabsContent>

                  <TabsContent value="external">
                    <div className="space-y-4">
                      <ComponentCard category="n8n_workflows" components={repositories.n8n_workflows || {}} />
                      <ComponentCard category="templates" components={repositories.templates || {}} />
                      <ComponentCard category="workflows" components={repositories.workflows || {}} />
                      <ComponentCard category="agents" components={repositories.agents || {}} />
                      <ComponentCard category="business_models" components={repositories.business_models || {}} />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Puzzle className="h-5 w-5" />
                  Composition Builder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Composition Name</label>
                  <Input
                    value={compositionName}
                    onChange={e => setCompositionName(e.target.value)}
                    placeholder="My Custom Composition"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={compositionDescription}
                    onChange={e => setCompositionDescription(e.target.value)}
                    placeholder="Describe your composition..."
                    className="mt-1"
                    rows=3
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Selected Components ({selectedComponents.length})</label>
                  <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
                    {selectedComponents.map((component, index) => (
                      <div key={component.id} className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <div className="font-medium text-sm">{component.name}</div>
                          <div className="text-xs text-gray-500">{component.category}</div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeComponentFromComposition(component.id)}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={createComposition}
                  disabled={isCreating || selectedComponents.length === 0}
                  className="w-full"
                >
                  {isCreating ? 'Creating...' : 'Create Composition'}
                </Button>
              </CardContent>
            </Card>

            {createdComposition && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Created Composition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{createdComposition.name}</h4>
                      <p className="text-sm text-gray-600">{createdComposition.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Components</h4>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {createdComposition.components.map((comp, index) => (
                          <Badge key={index} variant="outline">{comp.name}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Status</h4>
                      <Badge variant="default">{createdComposition.status}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
